export const GET_METEO_DATA = "GET_METEO_DATA";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";

export interface Meteo {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface MeteoData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Meteo[];
  wind: {
    //
    speed: number; //
    deg: number; //
  }; //
}

export interface MeteoError {
  cod: string;
  message: string;
}

export interface MeteoState {
  data: MeteoData | null;
  loading: boolean;
  error: string;
}

interface GetMeteoAction {
  type: typeof GET_METEO_DATA;
  payload: MeteoData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type MeteoAction = GetMeteoAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
