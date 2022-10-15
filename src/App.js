import { useEffect } from "react";
import "./App.css";
import { useContext } from "react";
import { ForecastContext } from "./context/ForecastContext";
import { Routes, Route } from "react-router-dom";
import Forecast from "./routes/Forecast/Forecast";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";

function App() {
  const { forecast, setForecast } = useContext(ForecastContext);

  // traer objeto de localStorage y convertirlo en array

  useEffect(() => {
    const palettes = JSON.parse(localStorage.getItem("forecast")) || [];
    if (palettes) {
      setForecast(palettes);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="forecast" element={<Forecast />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
