
import AllPublisher from "../AllPublisher/AllPublisher";
import Banner from "../Banner/Banner";
import Plans from "../Plans/Plans";
import Statistic from "../Statistic/Statistic";


const Home = () => {
    return (
        <>
            <Banner></Banner>
			<AllPublisher></AllPublisher>
            <Statistic></Statistic>
            <Plans></Plans>
        </>
    );
};

export default Home;