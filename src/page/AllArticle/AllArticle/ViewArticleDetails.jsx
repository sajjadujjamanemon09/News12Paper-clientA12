
import { useLoaderData } from "react-router-dom";
import Container from "../../../components/ui/Container";

const ViewArticleDetails = () => {

  const details = useLoaderData()

  return (
  

<Container>
<div className="h-screen flex items-center">
<div className="card bg-base-100 shadow-xl">
<article key={details._id} className="w-full">
    <div className="flex justify-center"><h2 className="card-title text-4xl font-bold py-16 px-8">{details?.title}</h2></div>
  <figure><img className="h-[40vh]" src={details?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <p className="badge badge-accent">{details?.publisher}</p>
    <p>{details?.description}</p>
  </div>
  </article>
</div>
</div>
</Container>
  );
};

export default ViewArticleDetails;

