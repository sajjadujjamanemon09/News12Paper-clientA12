import Select from "react-select";
import { useState } from "react";

const tags = [
  { value: "#fashion", label: "#fashion" },
  { value: "#sports", label: "#sports" },
  { value: "#fitness", label: "#fitness" },
  { value: "#movie", label: "#movie" },
  { value: "#travel", label: "#travel" },
  { value: "#magazine", label: "#magazine" },
];

const publisher = [
  { value: "Daily Star", label: "Daily Star" },
  { value: "The Independent", label: "The Independent" },
  { value: "New Age", label: "New Age" },
  { value: "Dhaka Tribune", label: "Dhaka Tribune" },
];

const AddArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    description: "",
    publisher: [],
    tags: [],
  });

  const handleBlur = (e, name) => {
    const updatedArticle = { ...article, [name]: e.target.value };
    setArticle(updatedArticle);
  };

  const handleSelectBlur = (selectedOption, name) => {
    const updatedArticle = {
      ...article,
      [name]: Array.isArray(selectedOption)
        ? selectedOption.map((option) => option.value)
        : selectedOption.value,
    };
    setArticle(updatedArticle);
  };

  const handleAddTitle = (e) => {
    e.preventDefault();
    console.log("Article data:", article);
  };

  return (
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
                  onBlur={(e) => handleBlur(e, "title")}
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
                  onBlur={(e) => handleBlur(e, "description")}
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
                name="tags"
                className="basic-multi-select py-2 w-full"
                classNamePrefix="select"
                onChange={(selectedOption) => handleSelectBlur(selectedOption, "tags")}
              />
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Publisher</span>
              </label>

              <Select
                className="basic-single py-2 w-full"
                classNamePrefix="select"
                name="publisher"
                options={publisher}
                onChange={(selectedOption) => handleSelectBlur(selectedOption, "publisher")}
              />
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
  );
};

export default AddArticle;


