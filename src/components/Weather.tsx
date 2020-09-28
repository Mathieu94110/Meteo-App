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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Meteo: React.FC<MeteoProps> = ({ data }) => {
  const fahrenheit = data.main.temp * 1.8 - 459.67;
  const celsius = data.main.temp - 273.15;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        title="Weather_image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {data.name} - {data.sys.country}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.weather[0].description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.main.temp}K
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {fahrenheit} - {celsius}
        </Typography>
        <Typography>Humidité : {data.main.humidity}</Typography>
        <Typography>Pression : {data.main.pressure}</Typography>
        <Typography>Vent : {data.wind.speed} m/s</Typography>
      </CardContent>
    </Card>
  );
};

export default Meteo;
