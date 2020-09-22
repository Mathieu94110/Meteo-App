import {
  GET_METEO_DATA,
  WeatherState,
  SET_ERROR,
  SET_LOADING,
  WeatherAction,
} from "../../types";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_METEO_DATA:
      return {
        data: action.payload,
        error: "",
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
