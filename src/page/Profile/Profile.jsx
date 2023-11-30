import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import UpdateProfile from "./UpdateProfile";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>News12Paper | Profile</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen">
        <div className="w-96 px-14 py-16  text-center bg-base-300 rounded-lg lg:mt-0 xl:px-10">
          <div className="mb-12 flex justify-end">
            <button>
              <UpdateProfile></UpdateProfile>
            </button>
          </div>
          <div className="space-y-4 xl:space-y-6">
            <img
              className="mx-auto rounded-full h-36 w-36"
              src={user?.photoURL}
              alt="author avatar"
            />
            <div className="space-y-2">
              <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                <h3 className="text-black">{user?.displayName}</h3>
                <p className="text-green-800">{user?.email}</p>
                <div className="flex justify-center mt-5 space-x-5">
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
