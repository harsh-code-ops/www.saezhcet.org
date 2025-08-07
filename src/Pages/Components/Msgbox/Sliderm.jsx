import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperm.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Msgbox from "./Msgbox";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Msgbox
          Designation="Dean"
          Image="Dean"
          Department="Faculty of Engineering & Technology,ZHCET"
          Name="Prof. Nesar Ahmed"
          Content="Students from SAE-ZHCET proved they are as capable as students from IITs, NITs, and other renowned universities by creating a variety of automobiles in several industries and winning multiple competitions. I am thus quite pleased with all of the efforts made by our students since this speaks well of their original thought."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Msgbox
          Designation="Principal"
          Image="principal_.jpeg"
          Department="ZHCET"
          Name="Prof. Mohammad Muzammil"
          Content="It gives me immense pride and pleasure to extend my warm greetings to the Society of Automotive Engineers (SAE) chapter of our esteemed college. SAE serves as a dynamic platform for undergraduate engineers to unleash their creativity, technical expertise, and collaborative spirit by engaging in the exciting journey of designing and fabricating Formula-style vehicles.
 I am confident that with determination, teamwork, and passion, our SAE team will continue to scale new heights and make us proud.
Wishing the team the very best for their future endeavors!
"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Msgbox
          Designation="Chairman"
          Image="Chairman.jpeg"
          Department="Department of Mechanical Engineering, ZHCET"
          Name="Prof. Raisuddin Ansari"
          Content="I am very proud of the successful journey of SAE ZHCET to this date.  They have not only brought honors to the Mechanical Engineering Department of ZHCET but also to Aligarh Muslim University by winning several tournaments throughout these years. All this was possible not only due to enthusiasm. hard work and devotion of its members but also with the support from their alumni network. I wish them to come up with flying colors in their future endeavors."
        />
      </SwiperSlide>
    </Swiper>
  );
};
