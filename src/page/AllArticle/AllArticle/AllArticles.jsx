// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import InfiniteScroll from "react-infinite-scroll-component";

const getArticles = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`
  );
  const data = await res.json();

  return { ...data, prevOffset: pageParam };
};

const AllArticles = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
        return false;
      }
      return lastPage.prevOffset + 10;
    },
  });

  const articles = data?.pages.reduce((acc, page) => {
    console.log(page);
    return [...acc, ...page.articles];
  }, []);

  // const axiosPublic = useAxiosPublic()

  // const {data} = useQuery({
  //     queryKey: ['title'],
  //     queryFn: async() => {
  //         const res = await axiosPublic.get('/title')
  //         console.log(res.data);
  //         return res.data
  //     }
  // })

  return (
    <>
      <Helmet>
        <title>News12Paper | All Article</title>
      </Helmet>
      <div>
        <InfiniteScroll
          dataLength={articles ? articles.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loading={<div>Loading..</div>}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            {articles &&
              articles.map((article, idx) => {
                return (
                  <div className="border-1 p-2 rounded-lg" key={idx}>
                    <div className="card h-[23rem] card-side bg-base-200 shadow-xl">
                    <div className="w-2/5">
                  
                        <img className="h-full w-full object-cover" src='https://i.ibb.co/yR5KzH0/R-1.jpg' alt="Movie" />
               
                    </div>
                      <div className="card-body w-3/5">
                        <h2 className="card-title">{article.title}</h2>
                        <p>{article.description}</p>
                        <p>{article.publisher}</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default AllArticles;
