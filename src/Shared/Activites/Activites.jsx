import { Swiper, SwiperSlide } from "swiper/react";

import logo1 from "../../assets/images/banner/img5.jpg";
import logo2 from "../../assets/images/banner/img6.jpg";
import logo3 from "../../assets/images/banner/img1.jpg";
import logo4 from "../../assets/images/banner/img3.jpg";
import logo5 from "../../assets/images/banner/img2.jpg";
import logo6 from "../../assets/images/banner/img4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import './Activites.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import Container from "../../components/Container";


const Activites = () => {


  return (
    <Container>
      <h2 className="text-center text-3xl font-serif font-bold mt-20 mb-5">Our Activity</h2>
      <p className="text-center font-serif mb-20">Experience the Thrill, Discover the Adventure</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[ Pagination, Autoplay, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo6} alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Activites;
