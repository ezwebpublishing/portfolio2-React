import React, { useEffect } from 'react';
import './App.css';

function Animation() {
  useEffect(() => {
    const imageSequence = document.querySelector('.image-sequence');
    const images = imageSequence.querySelectorAll('img');
    const frameLength = images.length;
    let velocity = 0;
    let counter = 0;
    let timer = null;
    let currentFrame = 0;

    const handleMouseWheel = (event) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      velocity += delta * 1.5;
      startAnimation();
    };

    const startAnimation = () => {
      if (!timer) {
        timer = setInterval(animateSequence, 1000 / 30);
      }
    };

    const stopAnimation = () => {
      clearInterval(timer);
      timer = null;
    };

    const animateSequence = () => {
      velocity *= 0.9;
      if (Math.abs(velocity) < 0.00001) {
        stopAnimation();
      } else {
        counter = (counter + velocity) % frameLength;
      }
      const nextFrame = Math.floor(counter);
      if (currentFrame !== nextFrame) {
        images[currentFrame].style.display = 'none';
        images[nextFrame].style.display = 'block';
        currentFrame = nextFrame;
      }
    };

    imageSequence.addEventListener('wheel', handleMouseWheel);

    // 초기화: 첫 번째 이미지만 표시
    images.forEach((img, index) => {
      if (index !== 0) img.style.display = 'none';
    });

    return () => {
      imageSequence.removeEventListener('wheel', handleMouseWheel);
      stopAnimation();
    };
  }, []);

  return (
    <>
      <section className="scene wheel-animation" id="scene-1">
        <div className="image-sequence">
          {Array.from({ length: 192 }, (_, index) => (
            <img src={`image/sequence/sky${String(index + 1).padStart(3, '0')}.jpg`} alt="" key={index} />
          ))}
        </div>
        <p className="instruction">
          <img alt="" className="image" src="image/mouse-black.png" width="74" height="69" />
          <span className="text">Scroll to play</span>
        </p>
      </section>
      <div className="progress">
        <span className="bar"></span>
        <span className="rate">0%</span>
      </div>
    </>
  );
}

export default Animation;