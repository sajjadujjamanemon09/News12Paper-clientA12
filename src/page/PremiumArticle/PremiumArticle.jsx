import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import diamond from "../../../public/Animation - 1701181858166.json";
import SectionTitle from "../../components/section/SectionTitle";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PremiumArticle = () => {
  const axiosSecure = useAxiosSecure();
  const { data: premiumPlan = [] } = useQuery({
    queryKey: ["premium"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/premiumPlan?quality=premium`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="max-w-7xl mx-auto pb-10">
      <Helmet>
        <title>News12Paper | Premium Article</title>
      </Helmet>
      <SectionTitle
        subHeading={"PLANS"}
        heading={"Premium Article"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {premiumPlan.map((article, idx) => (
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
                  {article?.quality == "premium" && (
                    <Lottie className="" animationData={diamond} loop={true} />
                  )}
                </div>
                <h2 className="card-title mr-5">
                  {article.title.split(" ").slice(0, 10).join(" ")}{" "}
                </h2>
                <span className="badge badge-accent">{article.publisher}</span>
                <p className="mr-3 pb-10 mb-5">
                  {article.description.split(" ").slice(0, 25).join(" ")} .....
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
  );
};

export default PremiumArticle;
