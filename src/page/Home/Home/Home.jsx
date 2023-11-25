
import AllPublisher from "../AllPublisher/AllPublisher";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Plans from "../Plans/Plans";
import Statistic from "../Statistic/Statistic";
import ViewerReviews from "../VIewerReviews/ViewerReviews";


const Home = () => {
    return (
        <>
            <Banner></Banner>
			<AllPublisher></AllPublisher>
            <Statistic></Statistic>
            <Plans></Plans>
            <ViewerReviews></ViewerReviews>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;