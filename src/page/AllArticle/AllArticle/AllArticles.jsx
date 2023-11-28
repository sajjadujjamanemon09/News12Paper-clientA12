// import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
// import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {  FaSearch } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import Lottie from "lottie-react";
import diamond from '../../../../public/Animation - 1701181858166.json'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

// const getArticles = async ({ pageParam = 0 }) => {
//   const res = await fetch(
//     `https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`
//   );
//   const data = await res.json();

//   return { ...data, prevOffset: pageParam };
// };

const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const [searchInput, setSearchInput] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["title"],
    queryFn: async () => {
      const res = await axiosPublic.get("/title/approve");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  // const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  //   queryKey: ["articles"],
  //   queryFn: getArticles,
  //   getNextPageParam: (lastPage) => {
  //     if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
  //       return false;
  //     }
  //     return lastPage.prevOffset + 10;
  //   },
  // });

  // const articles = data?.pages.reduce((acc, page) => {
  //   return [...acc, ...page.articles];
  // }, []);

  const handleSearchInput = (event) => {
    const searchValue = event.target.value;
    setSearchInput(searchValue);

    // Filter the articles based on the search input
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredArticles(filtered);
  };

  return (
    <>
      <Helmet>
        <title>News12Paper | All Article</title>
      </Helmet>
      <div>
        <div className="flex justify-end mt-10 pr-8">
          <label className="hidden">Search</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <FaSearch></FaSearch>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="border border-black w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-base-200 text-black"
              value={searchInput}
              onChange={handleSearchInput}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {searchInput && filteredArticles.length > 0
            ? filteredArticles.map((article, idx) => (
                <div className="border-1 p-2 rounded-lg" key={idx}>
                  <div className="card h-[23rem] card-side bg-base-200 shadow-xl">
                    <div className="w-2/5">
                      <img
                        className="h-full w-full object-cover"
                        src={article.image}
                        alt="Movie"
                      />
                    </div>
                    <div className="card-body w-3/5">
                    
                      <h2 className="card-title">{article.title}</h2>
                    {article?.quality == 'premium' && <p className=""><IoDiamondSharp /></p>}
                      <p className="">{article.publisher}</p>
                      <p>
                        {article.description.split(" ").slice(0, 35).join(" ")}{" "}
                        .....
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                          <Link to={`/viewArticleDetails/${article._id}`}>
                            View Details
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : articles &&
              articles.map((article, idx) => (
                <div className="border-1 p-2 rounded-lg" key={idx}>
                  <div className="card h-[23rem] card-side bg-base-200 shadow-xl">
                    <div className="w-2/5">
                      <img
                        className="h-full w-full object-cover"
                        src={article.image}
                        alt="Movie"
                      />
                    </div>
                    <div className="card-body w-3/5">
               <div className="absolute right-0 w-24 top-2">
                    {article?.quality == 'premium' && <Lottie className="" animationData={diamond} loop={true} />}
               </div>
               <h2 className="card-title mr-5">{article.title.split(" ").slice(0, 10).join(" ")}{" "}</h2>
                      <span className="badge badge-accent">
                        {article.publisher}
                      </span>
                      <p className="mr-3 pb-10 mb-5">
                        {article.description.split(" ").slice(0, 25).join(" ")}{" "}
                        .....
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn absolute bottom-4 btn-neutral">
                          <Link to={`/viewArticleDetails/${article._id}`}>
                            View Details
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default AllArticles;
