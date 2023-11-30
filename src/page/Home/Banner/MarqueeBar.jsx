import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const MarqueeBar = () => {
    return (
        <div>
                        <div className="bg-[#F3F3F3] flex items-center mt-20">
              <h2 className="px-6 py-6 text-xl font-medium bg-[#D72050] text-white">
                Breaking
              </h2>
              <Marquee pauseOnHover={true}>
                <Link
                  to="/"
                  className="text-lg font-semibold text-[#403F3F] mr-10"
                >
                  Match Highlights: Germany vs Spain — as it happened ! Match
                  Highlights: Germany vs Spain as...
                </Link>
                <Link
                  to="/"
                  className="text-lg font-semibold text-[#403F3F] mr-10"
                >
                  Match Highlights: Germany vs Spain — as it happened ! Match
                  Highlights: Germany vs Spain as...
                </Link>
                <Link
                  to="/"
                  className="text-lg font-semibold text-[#403F3F] mr-10"
                >
                  Match Highlights: Germany vs Spain — as it happened ! Match
                  Highlights: Germany vs Spain as...
                </Link>
              </Marquee>
            </div>
            {/* --------------------------- */}
            <div className="bg-[#F3F3F3] flex items-center mt-2">
              <Marquee pauseOnHover={true}>
                <Link
                  to="/"
                  className="text-lg font-semibold text-[#403F3F] mr-10"
                >
                  Match Highlights: Germany vs Spain — as it happened ! Match
                  Highlights: Germany vs Spain as...
                </Link>
                <Link
                  to="/"
                  className="text-lg font-semibold text-[#403F3F] mr-10"
                >
                  Match Highlights: Germany vs Spain — as it happened ! Match
                  Highlights: Germany vs Spain as...
                </Link>
                <Link
                  to="/"
                  className="text-lg font-semibold text-[#403F3F] mr-10"
                >
                  Match Highlights: Germany vs Spain — as it happened ! Match
                  Highlights: Germany vs Spain as...
                </Link>
              </Marquee>
              <h2 className="px-6 py-3 text-xl font-medium bg-[#2020d7] text-white">
                Latest
              </h2>
            </div>
        </div>
    );
};

export default MarqueeBar;