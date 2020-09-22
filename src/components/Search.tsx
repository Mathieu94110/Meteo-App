import React from "react";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { setAlert } from "../store/actions/alertActions";
import { getMeteo, setLoading } from "../store/actions/weatherActions";

interface SearchProps {
  title: string;
}

const Search: React.FC<SearchProps> = ({ title }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") {
      return dispatch(setAlert("Vous devez renseignez une ville !"));
    }
    dispatch(setLoading());
    dispatch(getMeteo(city));
    setCity("");
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={city}
          placeholder="Choisissez une ville !"
        />
        <button>Rechercher</button>
      </form>
    </div>
  );
};

export default Search;
