import {
  GET_METEO_DATA,
  MeteoData,
  MeteoError,
  MeteoAction,
  SET_LOADING,
  SET_ERROR,
} from "../../types";

import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

export const getMeteo = (
  city: string
): ThunkAction<void, RootState, null, MeteoAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${process.env.REACT_APP_API_KEY}`
      );
      if (!res.ok) {
        const resData: MeteoError = await res.json();
        throw new Error("Error " + resData.message);
      }
      const resData: MeteoData = await res.json();
      dispatch({
        type: GET_METEO_DATA,
        payload: resData,
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const setLoading = (): MeteoAction => {
  return {
    type: SET_LOADING,
  };
};
export const setError = (): MeteoAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
