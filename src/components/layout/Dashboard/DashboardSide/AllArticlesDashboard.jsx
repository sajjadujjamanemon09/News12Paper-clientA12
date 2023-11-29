import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import DeclineModals from "./DeclineModals";
import { useState } from "react";

const AllArticlesDashboard = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

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

  const indexOfLastArticle = (currentPage + 1) * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

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
            {currentArticles?.map((article) => (
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
                    {article.title.split(" ").slice(0, 6).join(" ")}
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
              {/* Pagination */}
      <nav className="flex items-center justify-center ml- py-20 -space-x-px">
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {[...Array(Math.ceil(articles.length / itemsPerPage)).keys()].map((page) => (
          <button
            key={page}
            type="button"
            className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
              currentPage === page
                ? 'bg-gray-200 text-gray-800'
                : 'border border-gray-200 text-gray-800 hover:bg-gray-100'
            } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
            onClick={() => setCurrentPage(page)}
          >
            {page + 1}
          </button>
        ))}
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={indexOfLastArticle >= articles.length}
        >
          Next
        </button>
      </nav>
      {/* End Pagination */}
      </div>
    </>
  );
};

export default AllArticlesDashboard;
