import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";







const AllUsersDashboard = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });
  const handleMakeAdmin = async (user) => {
    console.log(">>>>>");
    const result = await axiosPublic.patch(`/user/admin/${user._id}`);
    console.log(result);
    if (result.data.modifiedCount > 0) {
      refetch();
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
    }
  };
  return (
<>
<Helmet>
  <title>News12Paper | DashBoard | All User DashBoard</title>
</Helmet>
<div>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Profile Image
            </th>
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
              Email
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
          {users?.map((user) => (
            <>
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user?.image}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900"></div>
                      <div className="text-sm text-gray-500"></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user?.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {user?.email}
                  </span>
                </td>

                <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500">
                  {user?.role == "admin" ? (
                    <p>Admin</p>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
</>
  );
};

export default AllUsersDashboard;
