import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import alertReducer from "./alertReducer";
import weatherReducer from "./weatherReducer";

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
