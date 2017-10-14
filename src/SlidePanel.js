import React from 'react';
import './SlidePanel.css';

export default () => {

  const slideOut = () => {
    const slidePanel = document.querySelector('.slide-panel');
    slidePanel.classList.toggle('slide-out');
  }

  return (
    <div className="slide-panel" >
      <a className="slide-tab"
        title="info"
        name="info"
        alt="info"
        onClick={slideOut}
      >
        <i className="fa fa-2x fa-info-circle" aria-hidden="true"></i>
      </a>
      <article className="slide-content">
        <h1>Code Quiz</h1>
        <p>Card assets by <a href="http://codecards.io/">codecards.io</a> are licensed under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons by 4.0</a>. Check out the source code and contribute <a href="https://github.com/BeejLuig/code-cards-game">here</a></p>
        <p>
          <small>
            Made with ♥ by <a href="/">BJ Cantlupe</a>.
          </small>
        </p>
      </article>
    </div>
  )
}
