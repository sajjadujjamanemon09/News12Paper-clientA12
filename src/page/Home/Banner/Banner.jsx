import "react-awesome-slider/dist/styles.css";

import Container from "../../../components/ui/Container";
import TrendingNews from "./TrendingNews";
import MarqueeBar from "./MarqueeBar";
import AutoPlaySlider from "./AutoPlaySlider";
import Card from "./Card";

const Banner = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col-reverse md:flex-row gap-5 my-10">
          {/* trending card */}
          <div className="flex-1 px-3">
            <Card></Card>
          </div>

          {/* banner */}
          <div className="flex-1 px-2">
            {/* autoplay */}
            <div>
              <AutoPlaySlider></AutoPlaySlider>
            </div>
            {/* ----------Marquee----------------- */}
            <div>
              <MarqueeBar></MarqueeBar>
            </div>

            {/* trend news article */}
            <div>
              <TrendingNews></TrendingNews>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
