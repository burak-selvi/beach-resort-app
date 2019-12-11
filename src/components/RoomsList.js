import React from 'react';
import { connect } from 'react-redux';
import { Room } from '../components';

function RoomsList(props) {
  console.log(props.rooms);
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {props.rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  rooms: state.sortedRooms
});

export default connect(mapStateToProps, null)(RoomsList);