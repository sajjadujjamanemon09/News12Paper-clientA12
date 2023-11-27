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
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {articles &&
            articles.map((article, idx) => {
              return (
              <div 
              className="border-1 p-2 bg-slate-200 rounded-lg"
              key={idx}>
                <p className="text-2xl">{idx + 1}</p>
                <h2>{article.description}</h2>

              </div>)
            })}
        </div>
      </InfiniteScroll>
    </div>
</>
  );
};

export default AllArticles;
