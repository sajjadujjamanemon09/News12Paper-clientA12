import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import Lottie from "lottie-react";
import diamond from "../../../../public/Animation - 1701181858166.json";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/section/SectionTitle";
import InfiniteScroll from "react-infinite-scroll-component";

const AllArticles = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 2 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    if (dataSource.length < articles.length) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 2 })));
      }, 1000);
    } else {
      setHasMore(false);
    }
  };

  const axiosPublic = useAxiosPublic();
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["title"],
    queryFn: async () => {
      const res = await axiosPublic.get("/title/approve");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (event) => {
    const searchValue = event.target.value;
    setSearchInput(searchValue);

    // Filter the articles based on the search input
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(filtered);
  };

  return (
    <>
      <Helmet>
        <title>News12Paper | All Article</title>
      </Helmet>
      <div className="max-w-7xl mx-auto mb-10">
        <SectionTitle
          subHeading={"PLANS"}
          heading={"All Article"}
        ></SectionTitle>
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
              placeholder="Search articles..."
              value={searchInput}
              onChange={handleSearchInput}
              className="w-72 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <InfiniteScroll
            dataLength={dataSource.length}
            next={fetchData}
            hasMore={hasMore}
            // loader={<p>Loading...</p>}
            // endMessage={<p>No more data to load.</p>}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {(searchInput ? searchResults : articles)
                .slice(0, dataSource.length)
                .map((article, idx) => (
                  <div
                    className="border-1 p-2 rounded-lg cursor-pointer group "
                    key={idx}
                  >
                    <div className="card h-[23rem] card-side bg-base-200 shadow-xl group-hover:scale-105">
                      <div className="w-2/5 ">
                        <img
                          className="h-full w-full object-cover "
                          src={article.image}
                          alt="Article"
                        />
                      </div>
                      <div className="card-body w-3/5">
                        {article?.quality === "premium" && (
                          <div className="absolute right-0 w-24 top-2">
                            <Lottie
                              className=""
                              animationData={diamond}
                              loop={true}
                            />
                          </div>
                        )}
                        <h2 className="card-title mr-5">
                          {article.title.split(" ").slice(0, 6).join(" ")}
                        </h2>
                        <span className="badge badge-secondary block">
                          {article.publisher}
                        </span>
                        <p className="text-sm text-gray-500">
                          {article.description
                            .split(" ")
                            .slice(0, 50)
                            .join(" ")}
                        </p>
                        <Link
                          to={`/viewArticleDetails/${article._id}`}
                          className="flex items-center gap-2 mt-4 text-red-500"
                        >
                          Read More <FaLongArrowAltRight></FaLongArrowAltRight>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default AllArticles;
