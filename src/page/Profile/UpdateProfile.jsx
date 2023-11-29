import { IoClose } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UpdateProfile = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  return (
    <div>
      <button
        className="text-2xl"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <FaEdit></FaEdit>
      </button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <div className="">
            <form method="dialog modal-action">
              <div className="flex justify-end">
                <button>
                  <IoClose className="text-2xl"></IoClose>
                </button>
              </div>
              <div>
                {/* Mapping functionality */}
                {users.map((user) => (
                  <div key={user.id}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="email"
                        name="name"
                        placeholder="Edit User Name"
                        type="text"
                        required=""
                        defaultValue={user.name}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Image
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        name="image"
                        type="file"
                        required=""
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Upload
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProfile;