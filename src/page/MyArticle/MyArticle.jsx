import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight, FaDeleteLeft } from "react-icons/fa6";

import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MyArticle = () => {
  const { user } = useAuth();
  const  axiosPublic  = useAxiosPublic();

  const { data: articles, refetch } = useQuery({
    queryKey: ["title"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/title/myArticles?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/title/myArticles/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User Deleted Successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>News12Paper | My Article</title>
      </Helmet>
      <div>
        {articles?.length === 0 ? (
          <p className="flex mt-20 justify-center h-[80vh] text-red-800 text-4xl font-bold">
            You Have Added No Article Yet ...! 
          </p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Article Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Details
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-centert text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-centert text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  IsPremium
                </th>

                <th
                  scope="col"
                  className="px-6  py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {articles?.map((article, index) => (
                <tr key={article._id}>
                  <td className="px-6 text-center py-4 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex justify-center items-center">
                      {article?.title}
                    </div>
                  </td>

                  <td className="px-6  text-center py-4 whitespace-nowrap">
                    <Link>
                      <span className="px-2 gap-2 items-center inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        View Details <FaArrowRight />
                      </span>
                    </Link>
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                    {article?.status === "approve" ? (
                      <p className="flex gap-2 font-bold justify-center  items-center">
                        {article?.status}{" "}
                        <IoIosCheckmarkCircleOutline className="text-bold text-xl" />{" "}
                      </p>
                    ) : (
                      <button>Decline</button>
                    )}
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                    {article?.Quality ? (
                      <span className="px-2 font-bold inline-flex text-xs leading-5  rounded-full bg-red-100 text-red-800">
                        {article?.Quality}
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Free
                      </span>
                    )}
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex justify-center gap-3">
                      <Link onClick={() => handleDelete(article._id)}>
                        <FaDeleteLeft className="text-red-700 text-2xl" />
                      </Link>
                      <div className="border-r-2 border-gray-400"></div>
                      <Link
                      // to={`/update/${article._id}`}
                      >
                        <FaEdit className="text-black  text-2xl" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyArticle;
