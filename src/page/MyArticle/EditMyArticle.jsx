
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditMyArticle = () => {
  const [value, getValue] = useState([]);

  const articles = useLoaderData();
  console.log(articles);

  const axiosPublic = useAxiosPublic();

  const { data: publishers = [] } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publisher");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  const tags = [
    { value: "#fashion", label: "#fashion" },
    { value: "#sports", label: "#sports" },
    { value: "#fitness", label: "#fitness" },
    { value: "#movie", label: "#movie" },
    { value: "#travel", label: "#travel" },
    { value: "#magazine", label: "#magazine" },
  ];

  const Diagnose = (e) => {
    getValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const handleUpdate = async (e) => {
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
        tags,
        title,
        description,
        image: res.data.data.display_url,
        publisher,
      };

      const result = await axiosPublic.patch(
        `/title/update/${articles._id}`,
        data
      );
      console.log(result.data);
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: `${articles?.title} is updated !`,
          icon: "success",
        });
      }
    }
  };

  return (
    <div>
            <Helmet>
        <title>News12Paper | Edit Articles</title>
      </Helmet>
    <div className="mt-20 py-10">
      <div className="bg-base-300 rounded-xl my-20 p-14 py-10 max-w-5xl mx-auto">
      <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold pb-8">Edit Article</h2>
            <p>
              <span className="text-red-500">News12Paper</span>. Explore a World
              of News: Uncover the Latest Headlines, In-Depth Features, and
              Thought-Provoking Analysis on our Comprehensive Newspaper Article
              Website
            </p>
          </div>
        <form onSubmit={handleUpdate}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[17px] dark:text-white font-semibold">
                  Title
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={articles?.title}
                  placeholder="Title"
                  name="title"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  defaultValue={articles?.description}
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Image
                </span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  name="image"
                  required
                  className="input px-2 bg-white outline-red-400 w-full border-2 py-[9px] input-bordered"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-[17px] font-semibold">
                  Publisher Name
                </span>
              </label>
              <select
                className="border-2 text-black px-2 py-2 my-1 w-full"
                name="publisher"
                defaultValue={articles?.publisher}
                required
              >
                <option 
                className="text-black"
                value={articles?.publisher}>
                  {articles?.publisher}
                </option>
                {publishers?.map((item, index) => (
                  <option key={index} value={item?.publisher}>
                    {item?.publisher}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Tags
                </span>
              </label>
              <Select
                required
                options={tags}
                isMulti
                name="tag"
                defaultValue={
                  articles?.tags
                    ? articles?.tags?.map((tags) => ({ label: tags, value: tags }))
                    : []
                }
                onChange={Diagnose}
                className="basic-multi-select py-2 w-full"
                classNamePrefix="select"
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              className="btn btn-neutral w-full"
              type="submit"
              value="Update Article"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default EditMyArticle;
