import { SET_ROOMS, GET_ROOMS, HANDLE_CHANGE, FILTER_ROOMS } from "../actions/actions";

const initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false
};

const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_ROOMS:
      return { ...state, rooms: action.rooms, featuredRooms: action.featured, sortedRooms: action.rooms, loading: false, price: action.maxPrice, maxPrice: action.maxPrice, maxSize: action.maxSize };
    case GET_ROOMS:
      return { ...state }
    case HANDLE_CHANGE:
      return { ...state, [action.name]: action.value }
    case FILTER_ROOMS:
      return { ...state, sortedRooms: action.rooms }
    default:
      return state;
  }
};

export default rootReducer;