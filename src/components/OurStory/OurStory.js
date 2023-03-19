import React from "react";
import "./OurStory.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Navbar from "../Navbar/Navbar";

const OurStory = () => {
  return (
    <div className="OurStory">
      <Navbar />

      <div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="image-square">
                <div className="names">
                    <p>discover</p>
                    <h1>our history</h1>
                    <p>Et esse amet laboris fugiat id dolore tempor exercitation <br /> cupidatat id ullamco. Aliqua quis in incididunt minim cillum <br /> ullamco ex laboris id. Mollit laborum enim nisi sit ex irure <br /> proident commodo eu sunt magna  ad aliqua.<br /> Magna in irure Lorem ipsum aute deserunt labore et.<br /> Deserunt Lorem ipsum amet excepteur et.</p>
                </div>
                <img src={require("../images/slide-1.png")} alt="burger"/>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image-square">
                <div className="names">
                    <p>discover</p>
                    <h1>our history</h1>
                    <p>Et esse amet laboris fugiat id dolore tempor exercitation <br /> cupidatat id ullamco. Aliqua quis in incididunt minim cillum <br /> ullamco ex laboris id. Mollit laborum enim nisi sit ex irure <br /> proident commodo eu sunt magna  ad aliqua.<br /> Magna in irure Lorem ipsum aute deserunt labore et.<br /> Deserunt Lorem ipsum amet excepteur et.</p>
                </div>
                <img src={require("../images/slide-2.jpg")} alt="burger"/>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image-square">
                <div className="names">
                    <p>discover</p>
                    <h1>our history</h1>
                    <p>Et esse amet laboris fugiat id dolore tempor exercitation <br /> cupidatat id ullamco. Aliqua quis in incididunt minim cillum <br /> ullamco ex laboris id. Mollit laborum enim nisi sit ex irure <br /> proident commodo eu sunt magna  ad aliqua.<br /> Magna in irure Lorem ipsum aute deserunt labore et.<br /> Deserunt Lorem ipsum amet excepteur et.</p>
                </div>
                <img src={require("../images/slide-3.jpg")} alt="burger"/>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image-square">
                <div className="names">
                    <p>discover</p>
                    <br />
                    <h1>our history</h1>
                    <p>Et esse amet laboris fugiat id dolore tempor exercitation <br /> cupidatat id ullamco. Aliqua quis in incididunt minim cillum <br /> ullamco ex laboris id. Mollit laborum enim nisi sit ex irure <br /> proident commodo eu sunt magna  ad aliqua.<br /> Magna in irure Lorem ipsum aute deserunt labore et.<br /> Deserunt Lorem ipsum amet excepteur et.</p>
                </div>
                <img src={require("../images/slide-4.jpg")} alt="burger"/>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image-square">
                <div className="names">
                    <p>discover</p>
                    <h1>our history</h1>
                    <p>Et esse amet laboris fugiat id dolore tempor exercitation <br /> cupidatat id ullamco. Aliqua quis in incididunt minim cillum <br /> ullamco ex laboris id. Mollit laborum enim nisi sit ex irure <br /> proident commodo eu sunt magna  ad aliqua.<br /> Magna in irure Lorem ipsum aute deserunt labore et.<br /> Deserunt Lorem ipsum amet excepteur et.</p>
                </div>
                <img src={require("../images/slide-5.jpg")} alt="burger"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurStory;
