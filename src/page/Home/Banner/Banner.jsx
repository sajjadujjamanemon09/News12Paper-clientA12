import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <div className="max-w-7xl mx-auto my-14 gap-10 h-[70vh] flex">
        <div className="w-3/5">
          {" "}
          <AutoplaySlider
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
                  TechTrends Today
                  </h1>
                  <p>
                  Unveiling the Future: A deep dive into the latest breakthroughs in technology, from AI advancements to cutting-edge gadgets, and their impact on society.
                  </p>
                  <div>
                    <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                      Discover
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
                  Global EcoWatch
                  </h1>
                  <p>
                  Sustainable Living Worldwide: Exploring the latest developments in environmental conservation, renewable energy, and eco-friendly initiatives shaping our planets future.
                  </p>
                  <div>
                    <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                      Discover
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
                  Health Horizon
                  </h1>
                  <p>
                  Wellness in Focus: From groundbreaking medical discoveries to holistic health practices, stay informed about the latest trends and innovations in healthcare.
                  </p>
                  <div>
                    <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                      Discover
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
                  Financial Frontiers
                  </h1>
                  <p>
                  Navigating the Markets: Comprehensive coverage of global financial news, market trends, and economic insights to keep you ahead in the world of finance.
                  </p>
                  <div>
                    <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                      Discover
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
                  Cultural Canvas
                  </h1>
                  <p>
                  Art, Entertainment, and Beyond: Delve into the world of culture with a focus on the latest in art, cinema, music, and literature, capturing the pulse of creativity around the globe.
                  </p>
                  <div>
                    <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                      Discover
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
                  Beyond Borders
                  </h1>
                  <p>
                  International Affairs Unfold: A closer look at geopolitical events, diplomatic developments, and global issues that are shaping the international landscape.
                  </p>
                  <div>
                    <button className="btn btn-active bg-red-500 border-none text-white mr-5">
                      Discover
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </AutoplaySlider>
   {/* --------------------------- */}

   <div className="bg-[#F3F3F3] flex items-center mt-20">
        <h2 className="px-6 py-6 text-xl font-medium bg-[#D72050] text-white">Breaking</h2>
        <Marquee pauseOnHover={true}>
        <Link to='/' className="text-lg font-semibold text-[#403F3F] mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="text-lg font-semibold text-[#403F3F] mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="text-lg font-semibold text-[#403F3F] mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        </Marquee>
    </div>
   {/* --------------------------- */}

   <div className="bg-[#F3F3F3] flex items-center mt-2">

        <Marquee pauseOnHover={true}>
        <Link to='/' className="text-lg font-semibold text-[#403F3F] mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="text-lg font-semibold text-[#403F3F] mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="text-lg font-semibold text-[#403F3F] mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
        </Marquee>
        <h2 className="px-6 py-3 text-xl font-medium bg-[#2020d7] text-white">Latest</h2>
    </div>
   
        </div>

        <div className="w-1/3 h-full">
          {/* card */}
          <div className="card bg-base-200 card-side border-2 border-black rounded-lg">
  <div className="w-2/5 h-full rounded-xl"><figure><img src="https://i.ibb.co/fY5TV6k/R-1.jpg" alt="Movie"/></figure></div>
  <div className="card-body w-3/5">
    <h2 className="card-title">New Car is released!</h2>
    <p>The Toyota Supra Is Now Available</p>
  </div>
</div>
          {/* card */}
          <div className="card bg-base-200 card-side border-2 border-black rounded-lg my-2">
  <div className="w-2/5 h-full rounded-xl"><figure><img src="https://i.ibb.co/PWKCLKM/OIF.jpg" alt="Movie"/></figure></div>
  <div className="card-body w-3/5">
    <h2 className="card-title">Todays Football Match</h2>
    <p>New Castle & Man City war start.</p>
  </div>
</div>
          {/* card */}
          <div className="card bg-base-200 card-side border-2 border-black rounded-lg">
  <div className="w-2/5 h-full rounded-xl"><figure><img src="https://i.ibb.co/Rjs0sxj/OIF-1.jpg" alt="Movie"/></figure></div>
  <div className="card-body w-3/5">
    <h2 className="card-title">Work on traffic lights</h2>
    <p>There will be small amount of disruption to traffic flow in Longford town next week</p>
  </div>
</div>


        </div>
      </div>
    </>
  );
};

export default Banner;
