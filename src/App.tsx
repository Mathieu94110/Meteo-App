import React from "react";
import Alert from "./components/Alert";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { RootState } from "./store/reducers";
import { useSelector, useDispatch } from "react-redux";
import { setAlert } from "./store/actions/alertActions";
import { setError, setLoading } from "./store/actions/weatherActions";

const App: React.FC = () => {
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  const meteo = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const dispatch = useDispatch();

  return (
    <div>
      <Search title="barre de recherche" />
      {loading ? (
        <h2>Chargement en cours</h2>
      ) : (
        meteo && <Weather data={meteo} />
      )}
      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
};

export default App;
