// Import necessary modules from Redux and redux-thunk middleware
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Import the root reducer that combines all other reducers
import rootReducer from "./reducers";

// Create the Redux store using createStore function from Redux
// rootReducer is passed as the reducer
// Redux Thunk middleware is added using applyMiddleware to handle async actions in Redux
export default createStore(rootReducer, applyMiddleware(thunk));
