import React, { useEffect } from 'react';
import './App.css';

function Animation() {


  return (
    <>
      <section className="scene wheel-animation" id="scene-1">
        <div className="./image-sequence">
          {Array.from({ length: 192 }, (_, index) => (
            <img src={`./image/sequence/sky${String(index + 1).padStart(3, '0')}.jpg`} alt="" key={index} />
          ))}
        </div>  
        <p className="instruction">
          <img alt="" className="./image" src="./image/mouse-black.png" width="74" height="69" />
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