/*import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/MainBanner.css"*/

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";

import "../style/MainBanner.css";

SwiperCore.use([Pagination, Autoplay]);

const MainBanner = props=>{
    const {imageUrl} = props;
    return(
        <>
            <Swiper
                spaceBetween={100}
                initialSlide={1}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000  }}  
                speed={1000}
            >
                <SwiperSlide><img src={imageUrl[0]} alt="avengeras"></img></SwiperSlide>
                <SwiperSlide><img src={imageUrl[1]} alt="inception"></img></SwiperSlide>
                <SwiperSlide><img src={imageUrl[2]} alt="deadpool"></img></SwiperSlide>
            </Swiper>
        </>
        );
}

export default MainBanner;