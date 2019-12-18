import React from 'react';
import { connect } from "react-redux";
import { RoomsFilter, RoomsList } from '../components';


function RoomContainer(props) {
  const { rooms, sortedRooms } = props;
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  sortedRooms: state.sortedRooms
});

export default connect(mapStateToProps, null)(RoomContainer);