import { Helmet } from "react-helmet-async";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import { Link } from "react-router-dom";
import { useState } from "react";

const Subscription = () => {
  const [pay, setPay] = useState("");
  console.log(pay);
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div>
      <Helmet>
        <title>News12Paper | Subscription</title>
      </Helmet>

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
              src="https://iili.io/JAnticG.jpg"
              className="w-full rounded-xl"
            />
          </div>

          {/* banner 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://iili.io/JAnbq7f.jpg"
              className="w-full rounded-xl"
            />
          </div>

          {/* banner 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://iili.io/JAnmTjp.jpg"
              className="w-full rounded-xl"
            />
          </div>

          {/* banner 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://iili.io/JAnmmoN.jpg"
              className="w-full rounded-xl"
            />
          </div>

          {/* banner 5 */}
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src="https://iili.io/JAo99vs.jpg"
              className="w-full rounded-xl"
            />
          </div>

          {/* banner 6 */}
          <div id="slide6" className="carousel-item relative w-full">
            <img
              src="https://iili.io/JAo9DDx.jpg"
              className="w-full rounded-xl"
            />
          </div>
        </AutoplaySlider>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center pb-20">
          <div className="bg-gray-100 rounded-lg shadow-lg p-16">
            <h1 className="text-2xl font-bold mb-6">Make Payment</h1>

            <select
              className="w-full"
              onChange={(e) => setPay(e.target.value)}
              name="payment"
              id=""
            >
              <option value="" disabled selected>Choose One</option>
              <option value="15">1 Minute - $15</option>
              <option value="50">1 Days   -$50</option>
              <option value="100">3 Days -$100</option>
            </select>

            <div className="flex justify-center mt-6">
              <Link to={`/pay/${pay}`}>
              <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  disabled={pay === ""}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
