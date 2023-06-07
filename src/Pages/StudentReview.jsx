import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import { FcFeedback } from "react-icons/fc";

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import Container from "../components/Container";
import { useEffect, useState } from "react";

const StudentReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <Container>
      <div>
        <h1 className="text-center text-4xl my-10">Our Students Feed Back</h1>
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center mx-20 my-16">
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                  <FcFeedback className="h-full w-44 pt-5"></FcFeedback>
                  <h2 className="text-center text-2xl text-white py-5">
                    {review.name}
                  </h2>
                  <p className="text-orange-400 text-center">
                    {review.testimonial}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </Container>
  );
};

export default StudentReview;
