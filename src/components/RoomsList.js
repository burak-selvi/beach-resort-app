import React from 'react';
import { Room } from '../components';

function RoomsList(props) {
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

export default RoomsList;