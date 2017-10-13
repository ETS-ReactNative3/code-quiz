import React from 'react';
import './Card.css';

export default ({ cardNum, type, flipped, rotation, onClick }) => {
  const style = {
    backgroundImage: ''
  };



  if (flipped) {
    style.backgroundImage = `url(assets/${type}/${type}_A${cardNum}.png)`
  } else {
    style.backgroundImage = `url(assets/${type}/${type}_Q${cardNum}.png)`
  }

  style.transform = 'rotateY(' + rotation + 'deg)';

  return (
    <div onClick={onClick} className="card" style={style}></div>
  )
}
