import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaRegGrinWink } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../components/section/SectionTitle";

const ViewerReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <SectionTitle
        subHeading={"TESTIMONIAL"}
        heading={"WHAT OUR USER SAYS"}
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id} review={review}>
            <div className="flex flex-col items-center mx-24 my-16">
             
              <FaRegGrinWink className="text-yellow-300 text-8xl pt-5"></FaRegGrinWink>
              <p className="py-6">{review.details}</p>
              <h3 className="text-2xl text-red-700">{review.name}</h3>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ViewerReviews;
