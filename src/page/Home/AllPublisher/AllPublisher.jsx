import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/section/SectionTitle";
import Container from "../../../components/ui/Container";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllPublisher = () => {

  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publisher");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  return (
    <Container>
      <div className="my-10 px-2">
        <SectionTitle
          subHeading={"Publisher"}
          heading={"TOP Publisher"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {
            users.map(user => (<img key={user._id} src={user?.image} alt="" />))
          }
          
       
        </div>
      </div>
    </Container>
  );
};

export default AllPublisher;
