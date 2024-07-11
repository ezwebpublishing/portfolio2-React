import React, { useEffect } from 'react';
import $ from 'jquery'; // jQuery를 임포트합니다.
import './App.css';

function Project() {
  useEffect(() => {
    const $slider = $('.slider');
    const $prevButton = $('.prev');
    const $nextButton = $('.next');

    if (!$slider.length || !$prevButton.length || !$nextButton.length) {
      console.error('Slider or navigation buttons not found');
      return;
    }

    console.log('Slider and navigation buttons found');

    const handleNextClick = () => {
      const $items = $slider.find('.item');
      if ($items.length > 0) {
        $slider.append($items.first());
        console.log('Next button clicked');
      }
    };

    const handlePrevClick = () => {
      const $items = $slider.find('.item');
      if ($items.length > 0) {
        $slider.prepend($items.last());
        console.log('Prev button clicked');
      }
    };

    $nextButton.on('click', handleNextClick);
    $prevButton.on('click', handlePrevClick);

    return () => {
      $nextButton.off('click', handleNextClick);
      $prevButton.off('click', handlePrevClick);
    };
  }, []);

  return (
    <section id="project">
      <h2 className="hidden">project</h2>
      <div>
        <ul className="slider">
          <li className="item">
            <figure>
              <img src="/image/projeact_item01.png" alt="르세라핌 페이지" />
              <figcaption>
                <h2 className="tit-h1">르세라핌 리뉴얼 페이지</h2>
                <p>개인 프로젝트(기획 ~ 구현)</p>
                <p>바닐라 자바스크립트로 페이지 구현하였습니다.</p>
                <a href="#" className="button" data-btn="site 바로가기"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="/image/projeact_item02.png" alt="삼성sdi페이지"/>
              <figcaption>
                <h2 className="tit-h1">삼성SDI 리뉴얼 페이지</h2>
                <p>팀 프로젝트 : 메인 섹션(전체), 서브 페이지(비지니스), 팝업</p>
                <p>반응형 페이지로 제이쿼리로 구현하였습니다.</p>
                <a href="#" className="button" data-btn="site 바로가기"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="/image/projeact_item03.png" alt="lms 대쉬보드 페이지"/>
              <figcaption>
                <h2 className="tit-h1">ccc coding 관리자 페이지(LMS site)</h2>
                <p>팀 프로젝트 : 대쉬보드 메인(전체), 강의 관련 전체, 로그인 관련 전체, 팝업</p>
                <p>php, mysql, bootstrap으로 구현했습니다.</p>
                <a href="#" className="button" data-btn="site 바로가기"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="/image/projeact_item04.png" alt="lms 사용자 페이지"/>
              <h2 className="tit-h1">ccc coding 사용자 페이지(LMS site)</h2>
              <p>팀 프로젝트 : 메인 섹션(베너슬라이드, 강의 바로가기, 신규강의, 베스트 강의), 카테고리 관련 전체, 로그인 관련 전체, 팝업</p>
              <p>php, mysql, bootstrap으로 구현했습니다.</p>
              <a href="#" className="button" data-btn="site 바로가기"></a>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="/image/projeact_item05.png" alt="시장하시죠 페이지"/>
              <figcaption>
                <h2 className="tit-h1">시장하시죠 제작 페이지</h2>
                <p>개인 프로젝트(기획 ~ 구현)</p>
                <p>적응형 페이지로 제이쿼리로 구현했습니다.</p>
                <a href="#" className="button" data-btn="site 바로가기"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="/image/projeact_item06.png" alt="판다월드 페이지"/>
              <figcaption>
                <h2 className="tit-h1">판다월드 제작 페이지</h2>
                <p>개인 프로젝트(기획 ~ 구현)</p>
                <p>퍼블리싱을 배우며 처음 제작한 페이지 입니다.</p>
                <a href="#" className="button" data-btn="site 바로가기"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="/image/projeact_item07.png" alt="오키친 페이지"/>
              <figcaption>
                <h2 className="tit-h1">오키친 리뉴얼 페이지</h2>
                <p>개인 프로젝트(기획 ~ 구현)</p>
                <p>반응형 페이지로 제이쿼리로 구현했습니다.</p>
                <a href="#" className="button" data-btn="site 바로가기"></a>
              </figcaption>
            </figure>
          </li>          
        </ul>
        <nav>
          <ion-icon className="btn prev" name="chevron-back-circle-outline"></ion-icon>
          <ion-icon className="btn next" name="chevron-forward-circle-outline"></ion-icon>
        </nav>
      </div>
    </section>
  );
}

export default Project;