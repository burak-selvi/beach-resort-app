import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import defaultBcg from "../images/room-1.jpeg";
import { Banner, StyledHero } from './../components';


class RoomDetail extends Component {

  getRoom = slug => {
    let tempRooms = [...this.props.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  }

  render() {
    const slug = this.props.match.params.detail;
    const room = this.getRoom(slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : ${size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
});

export default connect(mapStateToProps, null)(RoomDetail);
