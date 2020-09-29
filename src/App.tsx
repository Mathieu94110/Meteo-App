import React from "react";
import Alerts from "./components/Alert";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { RootState } from "./store/reducers";
import { useSelector, useDispatch } from "react-redux";
import { setAlert } from "./store/actions/alertActions";
import { setError, setLoading } from "./store/actions/weatherActions";
import Carousel from "./components/Carousel";

import "./App.css";
const App: React.FC = () => {
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  const meteo = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const dispatch = useDispatch();

  return (
    <div>
      <Carousel />

      <Search title="barre de recherche" />

      {loading ? (
        <h2>Chargement en cours</h2>
      ) : (
        meteo && !alertMsg && !error && <Weather data={meteo} />
      )}
      {alertMsg && (
        <Alerts message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alerts message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
};

export default App;
