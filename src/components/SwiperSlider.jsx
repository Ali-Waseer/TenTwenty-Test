import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles2.scss";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';



function SwiperSlider() {
  return (
    <div className="container">
      <h1 className="heading" style={{textAlign: "center",marginTop: "50px"}}>Fashion Gallery {"(Images Source Unsplash)"} </h1>
     
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
      
        slidesPerView={window.innerWidth < 600 ? 1 : 3}
        loop={true}
        spaceBetween={100}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
         
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={(item) => 
          //we can render any component on change
          console.log(item.activeIndex)
        }
      >
        <SwiperSlide>
          <img src={"../assets/1.jpg"} alt="slide_image" style={{width: "300px", height: "700px"}}/>
          <spa style={{fontSize: "20px", textAlign: "justify", marginLeft: "100px", fontWeight: "bold",}} className={"lineUp"}>TenTwenty Slide 1</spa>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/2.jpg"} alt="slide_image" style={{width: "300px", height: "700px"}}/>
          <spa style={{fontSize: "20px", textAlign: "justify", marginLeft: "60px", fontWeight: "bold"}} className={"lineUp"} >TenTwenty Slide 2</spa>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/3.jpg"} alt="slide_image" style={{width: "300px", height: "700px"}}/>
          <spa style={{fontSize: "20px", textAlign: "justify", marginLeft: "60px", fontWeight: "bold"}}className={"lineUp"}>TenTwenty Slide 3</spa>

        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/4.jpg"} alt="slide_image" style={{width: "300px", height: "700px"}}/>
          <spa style={{fontSize: "20px", textAlign: "justify", marginLeft: "60px", fontWeight: "bold"}}className={"lineUp"}>TenTwenty Slide 4</spa>

        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/5.jpg"} alt="slide_image" style={{width: "300px", height: "700px"}}/>
          <spa style={{fontSize: "20px", textAlign: "justify", marginLeft: "60px", fontWeight: "bold"}}className={"lineUp"}>TenTwenty Slide 5</spa>

        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/6.jpg"} alt="slide_image"style={{width: "300px", height: "700px"}} />
          <spa style={{fontSize: "20px", textAlign: "justify", marginLeft: "60px", fontWeight: "bold"}}className={"lineUp"}>TenTwenty Slide 6</spa>

        </SwiperSlide>
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperSlider;