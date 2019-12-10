import React, { Component } from 'react'
import { connect } from "react-redux";
import { Main, Navbar } from './components';
import { data } from './data';
import { setRooms } from './actionCreator/actionCreator';
import './App.css';

class App extends Component {
  componentDidMount() {
    const rooms = data;
    const featured = rooms.filter(room => room.featured);
    const maxPrice = Math.max(...rooms.map(item => item.price));
    const maxSize = Math.max(...rooms.map(item => item.size));
    this.props.setRooms(rooms, featured, maxPrice, maxSize);
  }

  render() {
    return (
      <>
        <Navbar />
        <Main />
      </>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({
  setRooms: (rooms, featured, maxPrice, maxSize) => { dispatch(setRooms(rooms, featured, maxPrice, maxSize)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
