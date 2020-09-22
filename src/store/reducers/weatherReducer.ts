import {
  GET_METEO_DATA,
  MeteoState,
  SET_ERROR,
  SET_LOADING,
  MeteoAction,
} from "../../types";

const initialState: MeteoState = {
  data: null,
  loading: false,
  error: "",
};

export default (state = initialState, action: MeteoAction): MeteoState => {
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
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
