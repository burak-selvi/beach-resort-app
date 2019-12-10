import React, { Component } from 'react';
import { connect } from "react-redux";
import Title from './Title';
import Room from './Room';

class FeaturedRooms extends Component {
  render() {
    console.log(this.props.rooms);
    let rooms = this.props.rooms.map(room => {
      return <Room key={room.id} room={room} />
    })
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {rooms}

          {/* {loading ? <Loading /> : rooms} */}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  rooms: state.featuredRooms
});

export default connect(mapStateToProps, null)(FeaturedRooms);