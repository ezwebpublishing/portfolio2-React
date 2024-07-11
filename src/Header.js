import React from 'react';
import './App.css';

function Header() {
  return (
  <header>
    <h1 class="hidden">우예지의 포트폴리오 입니다.</h1>
    <nav class="container">
      <ul>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#project">project</a></li>
        <li><a href="#work">work</a></li>
        <li><a href="#notice">notice</a></li>
        <li><a href="#contact">contact us</a></li>
      </ul>
    </nav>
    <span class="nav-target"></span>
  </header> 
  )
}

export default Header;
