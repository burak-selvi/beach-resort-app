import { SET_ROOMS, GET_ROOMS, HANDLE_CHANGE, FILTER_ROOMS } from "../actions/actions";

export function setRooms(rooms, featured, maxPrice, maxSize) {
  return {
    type: SET_ROOMS, rooms, featured, maxPrice, maxSize
  }
}

export function getRooms() {
  return {
    type: GET_ROOMS
  }
}

export function handleChange(name, value) {
  return {
    type: HANDLE_CHANGE, name, value
  }
}

export function filterRooms(rooms) {
  return {
    type: FILTER_ROOMS, rooms
  }
}