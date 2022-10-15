import { useEffect} from "react";
import "./App.css";
import { useContext } from "react";
import { ForecastContext } from "./context/ForecastContext";
import { Routes, Route } from "react-router-dom";
import Forecast from "./routes/Forecast/Forecast";
import Navigation from './routes/Navigation/Navigation'
import Home from './routes/Home/Home'


//import { ForecastContext } from "./Forecast/Forecast.jsx";

//import Form from "./routes/Form/Form";
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
    //<ForecastContext.Provider value={{ forecastList: forecast, setForecast }}>
    <div className="App">
      <Routes>
            <Route path='/' element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path='forecast' element={<Forecast/>}/>
            </Route>
          </Routes>
      {/* <header>
        <h1>Forecast(pronostico xD)</h1>
        <Button >Crear nuevo pronostico </Button>
      </header>
      <Forecast />
      <Palettes palettes={forecast} /> */}
    </div>
    //</ForecastContext.Provider>
  );
}

export default App;
