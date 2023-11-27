
import { Helmet } from "react-helmet-async";
import AllPublisher from "../AllPublisher/AllPublisher";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Plans from "../Plans/Plans";
import Statistic from "../Statistic/Statistic";
import ViewerReviews from "../VIewerReviews/ViewerReviews";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>News12Paper | Home</title>
        </Helmet>
            <Banner></Banner>
			<AllPublisher></AllPublisher>
            <Plans></Plans>
            <Statistic></Statistic>
            <ViewerReviews></ViewerReviews>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;