import {
  MeteoState,
  MeteoAction,
  SET_LOADING,
  SET_ERROR,
  GET_METEO_DATA,
} from "../../types";

const initialState: MeteoState = {
  data: null,
  error: "",
  loading: false,
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
        error: "",
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
