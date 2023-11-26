import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
<div className="flex">
  <div className="w-3/5">      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
      >

        {/* banner 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/bvbscd3/annie-spratt-h-WJs-Ona-WTqs-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-7 w-1/2 pl-16">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* banner 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/F5XY8h1/bank-phrom-Tzm3-Oyu-6sk-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-7 w-1/2 pl-16">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* banner 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/BKxcpb7/priscilla-du-preez-Ggtxcc-Oj-IXE-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-7 w-1/2 pl-16">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* banner 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/1JBv0g7/sean-driscoll-NYSe-If-T3-JJ4-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-7 w-1/2 pl-16">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* banner 5 */}
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/J35NV52/hannah-grace-Te-r-G1-A6ru-U-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-7 w-1/2 pl-16">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* banner 6 */}
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Gv8t3KW/viktor-bystrov-1-QEs6h9s4-XQ-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-7 w-1/2 pl-16">
              <h1 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </AutoplaySlider></div>
  <div className="w-1/3">
    huhadfughueriguhveuih
  </div>
</div>
    </>
  );
};

export default Banner;
