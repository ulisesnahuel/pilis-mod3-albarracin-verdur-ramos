import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";
import Palettes from "../../components/Palette/Palettes";
import Button from "../../components/Button/Button.jsx";
//import './Home.css';

const Home = () => {

  const { forecast } = useContext(ForecastContext);

  return (
    <>
      <div className="main-container">
        <header>
          <h1 className="title">Forecast</h1>
        </header>
        <Palettes palettes={forecast} />
      </div>
    </>
  );
};

export default Home;
