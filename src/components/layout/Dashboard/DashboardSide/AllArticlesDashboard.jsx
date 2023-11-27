import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import DeclineModals from "./DeclineModals";
import { useState } from "react";

const AllArticlesDashboard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const axiosPublic = useAxiosPublic();
  const { data: articles = [], refetch } = useQuery({
    queryKey: ["title"],
    queryFn: async () => {
      const res = await axiosPublic.get("/title");
      console.log(res.data);
      return res.data; // Add this line to return the data
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
        axiosPublic.delete(`/title/${id}`).then((res) => {
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
  const handlePremium = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Premium it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/title/premium/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Premium!",
              text: "Article Premium Successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleApprove = (id) => {
    axiosPublic.patch(`/title/${id}`, { status: "approve" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
      }
      console.log(res.data);
    });
  };

  return (
    <>
      <Helmet>
        <title>News12Paper | Dashboard | All Articles Dashboard</title>
      </Helmet>
      <div>
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Article Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Posted Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Publisher
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Approval
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles?.map((article) => (
              <>
                <tr key={article._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={article?.authorImage}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {article?.authorName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {article?.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {article?.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {article?.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {article?.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {article?.publisher}
                  </td>

                  <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500">
                    {article.status == "approve" ? (
                      <p>Approved</p>
                    ) : (
                      <button
                        onClick={() => handleApprove(article._id)}
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Approve
                      </button>
                    )}
                    <button
                      onClick={() => handleOpen(article._id)}
                      href="#"
                      className="ml-2 text-red-600 hover:text-red-900"
                    >
                      Decline
                    </button>
                  </td>

                  <td className="px-6  py-4 whitespace-nowrap  text-sm font-medium">
                    {article.quality == "premium" ? (
                      <p>Premium</p>
                    ) : (
                      <button
                        onClick={() => handlePremium(article._id)}
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Make Premium
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(article._id)}
                      href="#"
                      className="ml-2 text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                  <DeclineModals
                    open={open}
                    article={article}
                    handleClose={handleClose}
                  />
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllArticlesDashboard;
