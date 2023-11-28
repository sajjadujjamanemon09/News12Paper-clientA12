import Select from "react-select";
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const tags = [
  { value: "#fashion", label: "#fashion" },
  { value: "#sports", label: "#sports" },
  { value: "#fitness", label: "#fitness" },
  { value: "#movie", label: "#movie" },
  { value: "#travel", label: "#travel" },
  { value: "#magazine", label: "#magazine" },
];

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddArticle = () => {
  const { user } = useAuth();
  console.log(user);

  const axiosPublic = useAxiosPublic();

  const [value, getValue] = useState([]);

  const Diagnose = (e) => {
    getValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const { data: publishers = [] } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publisher");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  const handleAddTitle = async (e) => {
    e.preventDefault();
    const form = e.target;
    const tags = value;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const publisher = form.publisher.value;
    const imgFile = { image: image };

    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      const data = {
        title,
        tags,
        description,
        publisher,
        email: user.email,
        authorImage: user.photoURL,
        authorName: user.displayName,
        image: res.data.data.display_url,
        status: "pending",
        date: new Date(),
      };
      const result = await axiosPublic.post("/title", data);
      console.log(result.data);

      if (result.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Article Added Successfully.",
          icon: "success",
        });
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>News12Paper | Add Articles</title>
      </Helmet>
      <div className="mt-20 py-10">
        <div className="bg-base-300 rounded-xl my-20 p-14 py-20 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold pb-8">Add New Article</h2>
            <p>
              <span className="text-red-500">News12Paper</span>. Explore a World
              of News: Uncover the Latest Headlines, In-Depth Features, and
              Thought-Provoking Analysis on our Comprehensive Newspaper Article
              Website
            </p>
          </div>
          <form onSubmit={handleAddTitle}>
            {/* name and Brand name Row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="title"
                    placeholder="Article Title"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* type & price row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Tags</span>
                </label>

                <Select
                  options={tags}
                  isMulti
                  onChange={Diagnose}
                  name="tags"
                  className="basic-multi-select py-2 w-full"
                  classNamePrefix="select"
                />
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text">Publisher</span>
                </label>

                <select
                  className="border-2 rounded-lg px-2 py-3 my-1 w-full bg-white"
                  name="publisher"
                  id=""
                >
                  {publishers?.map((item, index) => (
                    <option key={index} value={item?.name}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* image row */}
            <div className="mb-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="file"
                    name="image"
                    placeholder="Image URL"
                    className="input input-bordered w-full py-2"
                  />
                </label>
              </div>
            </div>
            <button
              type="submit"
              className=" btn btn-block bg-slate-800 text-white"
            >
              Add Articles
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddArticle;
