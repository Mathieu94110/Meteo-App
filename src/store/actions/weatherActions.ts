import {
  GET_METEO_DATA,
  SET_ERROR,
  SET_LOADING,
  MeteoData,
  MeteoError,
  MeteoAction,
} from "../../types";
import { RootState } from "../reducers";
import { ThunkAction } from "redux-thunk";

export const getMeteo = (
  city: string
): ThunkAction<void, RootState, null, MeteoAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&lang=fr`
      );
      if (!res.ok) {
        const resData: MeteoError = await res.json();
        throw new Error(resData.message);
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
