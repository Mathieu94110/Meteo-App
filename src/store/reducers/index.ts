import { composeWithDevTools } from "redux-devtools-extension";
import alertReducer from "./alertReducer";
import weatherReducer from "./weatherReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  alert: alertReducer,
  weather: weatherReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
