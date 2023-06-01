import { combineReducers } from "redux";

// Import the imagesReducer to handle state changes related to images
import imagesReducer from "./imagesReducer";

// Use combineReducers to bundle the reducers into one. Here, 'images' state is managed by imagesReducer.
export default combineReducers({
  images: imagesReducer,
});
