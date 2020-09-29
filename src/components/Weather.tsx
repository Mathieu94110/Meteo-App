import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MeteoData } from "../types";

interface MeteoProps {
  data: MeteoData;
}

const useStyles = makeStyles({
  root: {
    width: "600px",
    margin: "50px auto",
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  city: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  min: {
    color: "#6FA9FF",
  },
  max: {
    color: "#DD3D69",
  },
  temp: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  city_sky: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  otherdata: {
    fontWeight: "bold",
  },
});

const Meteo: React.FC<MeteoProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);
  const classes = useStyles();
  const temp_min = (data.main.temp_min - 273.15).toFixed(2);
  const temp_max = (data.main.temp_max - 273.15).toFixed(2);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        title="Weather_image"
      />
      <CardContent>
        <Typography className={classes.city}>
          {data.name} - {data.sys.country}
        </Typography>
        <Typography className={classes.city_sky}>
          {data.weather[0].description}
        </Typography>

        <Typography>
          <Typography className={classes.temp}>Température :</Typography>
          {celsius} ° C - {fahrenheit} ° F
        </Typography>
        <Typography>
          <span className={classes.min}>min :</span> {temp_min} ° C
          <span className={classes.max}> Max :</span> {temp_max} ° C
        </Typography>
        <Typography className={classes.otherdata}>
          Humidité : {data.main.humidity} %
        </Typography>
        <Typography className={classes.otherdata}>
          Pression : {data.main.pressure} hPa
        </Typography>
        <Typography className={classes.otherdata}>
          Vent : {data.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Meteo;
