import { useContext } from "react";
import {ForecastContext} from "../Forecast/Forecast.jsx";
import Palettes from "../../components/Palettes/Palettes.jsx";
import Button from "../../components/Button/Button.jsx";
const Home = () => {
    const { forecastPalettes}   = useContext(ForecastContext);

    return (
        <>
        <div className='main-container'>
            <Palettes/>
            <Button/>
        </div>
        </>
    )
};

export default Home;