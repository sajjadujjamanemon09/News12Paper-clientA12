import Select from "react-select";
import swal from "sweetalert";

const AddArticle = () => {
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

  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const publisher = form.publisher.value;
    const tags = form.tags.value;
    const description = form.description.value;
    const image = form.image.value;

    const newProduct = { title, publisher, tags, description, image };

    console.log(newProduct);
    console.log(tags);

    // send data to the server
    fetch("https://ass10-two.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Success!", "Product Added Successfully", "success");
        }
      });
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
        <form onSubmit={handleAddProduct}>
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
              <label className="input-group">
                <Select
                  options={tags}
                  isMulti
                  name="tags"
                  className="basic-multi-select py-2 w-full"
                  classNamePrefix="select"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
                <span className="label-text">Publisher</span>
              </label>
              <label className="input-group">
              <Select
                  options={publisher}
                  isMulti
                  name="publisher"
                  className="basic-multi-select py-2 w-full"
                  classNamePrefix="select"
                />
              </label>
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
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="btn btn-block bg-slate-800 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
