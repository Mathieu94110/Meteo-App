import React from "react";
import { Button, TextField, Collapse } from "@material-ui/core";
import { useState, FormEventHandler, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alertActions";

import {
  getMeteo,
  setLoading,
  setError,
} from "../store/actions/weatherActions";

interface SearchProps {
  title: string;
}

const Search: React.FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!city.trim()) {
      dispatch(setAlert("la ville n'est pas indiquée"));

      setTimeout(() => {
        dispatch(setAlert(""));
      }, 5000);

      setLoading();
      dispatch(getMeteo(city));

      setCity("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          value={city}
          label="Obtenez la météo d'une ville !"
          onChange={handleChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          value="Rechercher"
        >
          Rechercher
        </Button>
      </form>
    </div>
  );
};

export default Search;
