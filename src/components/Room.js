import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from "../images/room-1.jpeg";


export default function Room(props) {
  const { name, slug, images, price } = props.room;
  return (
    <div className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </div>
  )
}
