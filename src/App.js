import { useEffect, useState } from "react";
import "./App.css";

import Palettes from "./components/Palette/Palettes";
import Forecast from "./routes/Forecast/Forecast";
import Button from "./components/Button/Button";
import { useContext } from "react";
import { ForecastContext } from "./context/ForecastContext";

//import { ForecastContext } from "./Forecast/Forecast.jsx";

//import Form from "./routes/Form/Form";
function App() {


  const { forecast, setForecast } = useContext(ForecastContext);

  // traer objeto de localStorage y convertirlo en array
  // useEffect(() => {
    const palettes = JSON.parse(localStorage.getItem("forecast"));
    if (palettes) {
      setForecast(palettes);
    }
  // }, []);


  return (
    //<ForecastContext.Provider value={{ forecastList: forecast, setForecast }}>
    <div className="App">
      <header>
        <h1>Forecast(pronostico xD)</h1>
        <Button >Crear nuevo pronostico </Button>
      </header>
      <Forecast />
      <Palettes palettes={forecast} />
    </div>
    //</ForecastContext.Provider>
  );
}

export default App;
