import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoPlaySlider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div>
                        <div>
              {" "}
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={1000}
              >
                {/* banner 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="https://iili.io/JAno3aR.jpg"
                    className="w-full rounded-xl"
                  />
                  <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
                    <div className="text-white space-y-7 w-1/2 pl-16">
                      <h1 className="text-6xl font-bold">TechTrends Today</h1>
                      <p>
                        Unveiling the Future: A deep dive into the latest
                        breakthroughs in technology, from AI advancements to
                        cutting-edge gadgets, and their impact on society.
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
                    src="https://iili.io/JAnolne.jpg"
                    className="w-full rounded-xl"
                  />
                  <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
                    <div className="text-white space-y-7 w-1/2 pl-16">
                      <h1 className="text-6xl font-bold">Global EcoWatch</h1>
                      <p>
                        Sustainable Living Worldwide: Exploring the latest
                        developments in environmental conservation, renewable
                        energy, and eco-friendly initiatives shaping our planets
                        future.
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
                    src="https://iili.io/JAnohAB.jpg"
                    className="w-full rounded-xl"
                  />
                  <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
                    <div className="text-white space-y-7 w-1/2 pl-16">
                      <h1 className="text-6xl font-bold">Health Horizon</h1>
                      <p>
                        Wellness in Focus: From groundbreaking medical
                        discoveries to holistic health practices, stay informed
                        about the latest trends and innovations in healthcare.
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
                    src="https://iili.io/JAnoLVn.jpg"
                    className="w-full rounded-xl"
                  />
                  <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
                    <div className="text-white space-y-7 w-1/2 pl-16">
                      <h1 className="text-6xl font-bold">
                        Financial Frontiers
                      </h1>
                      <p>
                        Navigating the Markets: Comprehensive coverage of global
                        financial news, market trends, and economic insights to
                        keep you ahead in the world of finance.
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
                    src="https://iili.io/JAnxIx1.jpg"
                    className="w-full rounded-xl"
                  />
                  <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
                    <div className="text-white space-y-7 w-1/2 pl-16">
                      <h1 className="text-6xl font-bold">Cultural Canvas</h1>
                      <p>
                        Art, Entertainment, and Beyond: Delve into the world of
                        culture with a focus on the latest in art, cinema,
                        music, and literature, capturing the pulse of creativity
                        around the globe.
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
                    src="https://iili.io/JAnxExt.jpg"
                    className="w-full rounded-xl"
                  />
                  <div className="absolute rounded-xl h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
                    <div className="text-white space-y-7 w-1/2 pl-16">
                      <h1 className="text-6xl font-bold">Beyond Borders</h1>
                      <p>
                        International Affairs Unfold: A closer look at
                        geopolitical events, diplomatic developments, and global
                        issues that are shaping the international landscape.
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
            </div>
        </div>
    );
};

export default AutoPlaySlider;