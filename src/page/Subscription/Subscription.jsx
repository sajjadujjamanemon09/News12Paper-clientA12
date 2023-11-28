import { Helmet } from "react-helmet-async";
// import SectionTitle from "../../components/section/SectionTitle";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";

const Subscription = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div>
      <Helmet>
        <title>News12Paper | Subscription</title>
      </Helmet>
      {/* <SectionTitle
        subHeading={"PLANS"}
        heading={"Subscription"}
      ></SectionTitle> */}
      <div className="pb-28">
        {" "}
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={1000}
          style={{ height: "40vh" }} 
        >
          {/* banner 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/4tyQ36G/successful-businesswoman-checking-her-work-project-way-office-standing-street-with-digital.jpg"
              className="w-full rounded-xl"
            />
          </div>

          {/* banner 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/F5XY8h1/bank-phrom-Tzm3-Oyu-6sk-unsplash.jpg"
              className="w-full rounded-xl"
            />
          </div>

          {/* banner 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/BKxcpb7/priscilla-du-preez-Ggtxcc-Oj-IXE-unsplash.jpg"
              className="w-full rounded-xl"
            />
          </div>

          {/* banner 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/1JBv0g7/sean-driscoll-NYSe-If-T3-JJ4-unsplash.jpg"
              className="w-full rounded-xl"
            />

          </div>

          {/* banner 5 */}
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/J35NV52/hannah-grace-Te-r-G1-A6ru-U-unsplash.jpg"
              className="w-full rounded-xl"
            />
 
          </div>

          {/* banner 6 */}
          <div id="slide6" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/Gv8t3KW/viktor-bystrov-1-QEs6h9s4-XQ-unsplash.jpg"
              className="w-full rounded-xl"
            />

          </div>
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Subscription;
