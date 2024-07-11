import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './App.css';

const Notice = () => {
  const [swiperDirection, setSwiperDirection] = useState('horizontal');

  const toggleDirection = () => {
    setSwiperDirection(swiperDirection === 'horizontal' ? 'vertical' : 'horizontal');
  };

  return (
    <section id="notice">
      <div className="container notice-wrapper">
        <h2>notice</h2>
        <Swiper
          direction={swiperDirection}
          modules={[Navigation]}
          navigation
          slidesPerView={3} // 한 번에 3개의 슬라이드를 표시
          spaceBetween={30} // 슬라이드 사이의 간격 
          className="swiper-container"
        >
          <SwiperSlide>
            <a href="#">
              <p className="bnr-tit medium-gray">01 / <span className="medium-blue">01</span></p>
              <hr />
              <p className="point txt-sm-b">수료</p>
              <h3>기업연계 프로젝트형 웹디지안(웹퍼블리셔)&프론트엔드 SW개발자 양성</h3>
              <img src="/image/notice_item01.jpeg" alt="SW개발자 수료증" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <p className="bnr-tit medium-gray">01 / <span className="medium-blue">02</span></p>
              <hr />
              <p className="point txt-sm-b">수료</p>
              <h3>[웹코딩]웹퍼블리셔 프론트엔드(웹표준,HTML5,CSS3, 반응형 웹디자인)</h3>
              <img src="/image/notice_item02.jpg" alt="웹퍼블리셔 수료증" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <p className="bnr-tit medium-gray">01 / <span className="medium-blue">03</span></p>
              <hr />
              <p className="point txt-sm-b">수료</p>
              <h3>피그마(Figma) UI/UX 웹&앱 디자이너를 위한 실무활용</h3>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <p className="bnr-tit medium-gray">01 / <span className="medium-blue">03</span></p>
              <hr />
              <p className="point txt-sm-b">수료</p>
              <h3>기업연계 프로젝트형 웹디지안(웹퍼블리셔)&프론트엔드 SW개발자 양성</h3>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Notice;