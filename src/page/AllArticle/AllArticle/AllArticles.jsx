
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllArticles = () => {


    const axiosPublic = useAxiosPublic()

    const {data} = useQuery({
        queryKey: ['title'],
        queryFn: async() => {
            const res = await axiosPublic.get('/title')
            console.log(res.data);
            return res.data
        }
    })


    return (
        <div>
            
        </div>
    );
};

export default AllArticles;