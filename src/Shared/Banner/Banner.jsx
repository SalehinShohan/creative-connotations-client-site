import logo1 from "../../assets/images/banner/img1.jpg";
import logo2 from "../../assets/images/banner/img2.jpg";
import logo3 from "../../assets/images/banner/img3.jpg";
import logo4 from "../../assets/images/banner/img4.jpg";
import { FaSearch, FaArrowAltCircleDown, FaMapMarkerAlt } from "react-icons/fa";
import "./Banner.css";
import Container from "../../components/Container";

const Banner = () => {
  return (
    <Container>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={logo1} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/3">
              <h1 className="text-5xl font-bold mt-16">
                Unlock the World, One Language at a Time
              </h1>
              <p className="hidden sm:block">
                Discover fluency at Creative Connotations. Our immersive language
                programs empower you to communicate confidently in a foreign
                language. Join us on an exciting linguistic journey.
              </p>

              <div className="Search-box hidden sm:block">
                <div className="all-buttons-container mt-5">
                  <div className="search-input small-box">
                    <p>
                      <FaSearch color="gray" fontSize="1.5em" />
                    </p>
                    <p className="input-text p-3 mr-4">Search</p>
                  </div>
                  <div className="dropdown-input small-box">
                    <p className="input-text p-3">Category</p>
                    <p className="mr-4">
                      <FaArrowAltCircleDown color="gray" fontSize="1.5em" />
                    </p>
                  </div>
                  <div className="location-input small-box">
                    <p className="input-text p-3">Location</p>
                    <p className="mr-4">
                      <FaMapMarkerAlt color="gray" fontSize="1.5em" />
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button className="btn btn-outline btn-info">Learn More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={logo2} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/3">
            <h1 className="text-5xl font-bold mt-16">
                Unlock the World, One Language at a Time
              </h1>
              <p className="hidden sm:block">
                Discover fluency at Creative Connotations. Our immersive language
                programs empower you to communicate confidently in a foreign
                language. Join us on an exciting linguistic journey.
              </p>
              <div className="Search-box hidden sm:block">
                <div className="all-buttons-container mt-5">
                  <div className="search-input small-box">
                    <p>
                      <FaSearch color="gray" fontSize="1.5em" />
                    </p>
                    <p className="input-text p-3 mr-4">Search</p>
                  </div>
                  <div className="dropdown-input small-box">
                    <p className="input-text p-3">Category</p>
                    <p className="mr-4">
                      <FaArrowAltCircleDown color="gray" fontSize="1.5em" />
                    </p>
                  </div>
                  <div className="location-input small-box">
                    <p className="input-text p-3">Location</p>
                    <p className="mr-4">
                      <FaMapMarkerAlt color="gray" fontSize="1.5em" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button className="btn btn-outline btn-info">Learn More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={logo3} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/3">
            <h1 className="text-5xl font-bold mt-16">
                Unlock the World, One Language at a Time
              </h1>
              <p className="hidden sm:block">
                Discover fluency at Creative Connotations. Our immersive language
                programs empower you to communicate confidently in a foreign
                language. Join us on an exciting linguistic journey.
              </p>
              <div className="Search-box hidden sm:block">
                <div className="all-buttons-container mt-5">
                  <div className="search-input small-box">
                    <p>
                      <FaSearch color="gray" fontSize="1.5em" />
                    </p>
                    <p className="input-text p-3 mr-4">Search</p>
                  </div>
                  <div className="dropdown-input small-box">
                    <p className="input-text p-3">Category</p>
                    <p className="mr-4">
                      <FaArrowAltCircleDown color="gray" fontSize="1.5em" />
                    </p>
                  </div>
                  <div className="location-input small-box">
                    <p className="input-text p-3">Location</p>
                    <p className="mr-4">
                      <FaMapMarkerAlt color="gray" fontSize="1.5em" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button className="btn btn-outline btn-info">Learn More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={logo4} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/3">
            <h1 className="text-5xl font-bold mt-16">
                Unlock the World, One Language at a Time
              </h1>
              <p className="hidden sm:block">
                Discover fluency at Creative Connotations. Our immersive language
                programs empower you to communicate confidently in a foreign
                language. Join us on an exciting linguistic journey.
              </p>
              <div className="Search-box hidden sm:block">
                <div className="all-buttons-container mt-5">
                  <div className="search-input small-box">
                    <p>
                      <FaSearch color="gray" fontSize="1.5em" />
                    </p>
                    <p className="input-text p-3 mr-4">Search</p>
                  </div>
                  <div className="dropdown-input small-box">
                    <p className="input-text p-3">Category</p>
                    <p className="mr-4">
                      <FaArrowAltCircleDown color="gray" fontSize="1.5em" />
                    </p>
                  </div>
                  <div className="location-input small-box">
                    <p className="input-text p-3">Location</p>
                    <p className="mr-4">
                      <FaMapMarkerAlt color="gray" fontSize="1.5em" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button className="btn btn-outline btn-info">Learn More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
