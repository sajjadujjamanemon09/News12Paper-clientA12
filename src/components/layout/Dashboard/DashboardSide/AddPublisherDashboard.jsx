




import toast from "react-hot-toast";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddPublisherDashboard = () => {

    const axiosPublic = useAxiosPublic();
    const handleAddPublisher = async (e) => {
    
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.files[0];
    
     
        const imgFile = { image: image };
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log(res.data);
    
        if (res.data.success) {
          const data = {
            image: res.data.data.display_url,
            name,
          };
          const result = await axiosPublic.post("/publisher", data);
          console.log(result.data);
          if (result.data.insertedId) {
            toast.success("Publisher Info Added Successfully");
          }
        }
      };
    
      return (
<>
<Helmet>
  <title>News12Paper | Add Publisher DashBoard</title>
  
</Helmet>
<div className="bg-gray-50 h-screen flex items-center justify-center">
          <div className=" flex flex-col justify-center py-5 sm:px-6 lg:px-8 px-6">
         
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Add New Publisher
              </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleAddPublisher}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5  text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="email"
                        name="name"
                        placeholder="Enter Publisher Name"
                        type="text"
                        required=""
                        defaultValue=""
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
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
                </form>
              </div>
            </div>
          </div>
        </div>
</>
      );
    };

export default AddPublisherDashboard;

