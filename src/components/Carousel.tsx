import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { MeteoData, MeteoError } from "../types";
import Weather from "./Weather";
import { makeStyles } from "@material-ui/core/styles";

const Carousels: React.FC = () => {
  const [datas, setDatas] = useState<MeteoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const cities = ["Paris", "Lyon", "Marseille", "Lille", "Grenoble"];
  const getMeteo = async (city: string): Promise<MeteoData> => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!res.ok) {
      const resData: MeteoError = await res.json();
      throw new Error("Error " + resData.message);
    }
    const resData: MeteoData = await res.json();
    return resData;
  };

  const useStyles = makeStyles({
    root: {
      height: "200px",
      width: "300px",
      margin: "15px auto",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  useEffect(() => {
    let d: MeteoData[] = [];
    (async () => {
      for (let city of cities) {
        let result: MeteoData = await getMeteo(city);
        d.push(result);
      }
      setDatas(d);
      setLoading(false);
    })();
  });

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Carousel className={classes.root}>
        {datas.map((data, i) => {
          return (
            <Paper>
              <Weather data={data} />
              <Button className="CheckButton">Check it out!</Button>
            </Paper>
          );
        })}
      </Carousel>
    );
  }
};

export default Carousels;
