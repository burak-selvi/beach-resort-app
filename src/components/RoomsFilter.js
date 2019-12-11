import React, { Component } from 'react'
import { connect } from "react-redux";
import { handleChange, filterRooms } from './../actionCreator/actionCreator';
import { Title } from '../components';

class RoomsFilter extends Component {

  getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.props.handleChange(name, value);
    this.filterRooms();
  }

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.props;
    // all the rooms
    let tempRooms = [...rooms];
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    // filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    // change state
    this.props.filterRooms(tempRooms);
  }

  render() {
    const { type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, rooms } = this.props;

    let types = this.getUnique(rooms, "type");
    types = ["all", ...types];
    types = types.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });

    let people = this.getUnique(rooms, "capacity");
    people = people.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });

    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/*select type  */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={this.handleChange}
            >
              {types}
            </select>
          </div>
          {/* end select type */}
          {/*guests   */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={this.handleChange}
            >
              {people}
            </select>
          </div>
          {/* end guests  */}
          {/* room price */}
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          {/* end of room price */}
          {/* size */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={this.handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={this.handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/* end of size */}
          {/* extras  */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={this.handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={this.handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
          {/* end of extras  */}
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  type: state.type,
  capacity: state.capacity,
  price: state.price,
  minPrice: state.minPrice,
  maxPrice: state.maxPrice,
  minSize: state.minSize,
  maxSize: state.maxSize,
  breakfast: state.breakfast,
  pets: state.pets,
  rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({
  handleChange: (name, value) => { dispatch(handleChange(name, value)) },
  filterRooms: (rooms) => { dispatch(filterRooms(rooms)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomsFilter);