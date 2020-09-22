import React, { FC } from "react";
import { MeteoData } from "../types";

interface MeteoProps {
  data: MeteoData;
}

const Meteo: FC<MeteoProps> = ({ data }) => {
  const celsius = data.main.temp - 273;
  const fahrenheit = data.main.temp * 1.8 - 459.67;

  return (
    <section
      style={{ width: "100%", height: "100%", margin: "0", padding: "0" }}
    >
      <div>
        <h1 style={{ textAlign: "center", marginBottom: 50 }}>
          {data.name} - {data.sys.country}
        </h1>
        <div
          style={{
            alignItems: "flex-start",
            width: "100%",
            height: "700px",
            margin: "0 auto",
          }}
        >
          <div>
            <div>
              <p>{data.weather[0].description}</p>
              <p>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt=""
                />
              </p>
            </div>
            <div>
              <p>Température</p>
              <div>
                <p>{data.main.temp}K</p>
                <p>
                  {fahrenheit}
                  <sup>&#8457;</sup>
                </p>
                <p>
                  {celsius} <sup>&#8451;</sup>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p>Humidité</p>
              <p>{data.main.humidity}</p>
            </div>
          </div>

          <div>
            <div>
              <p>Pression</p>
              <p className="title">{data.main.pressure}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Vent</p>
              <p>{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meteo;
