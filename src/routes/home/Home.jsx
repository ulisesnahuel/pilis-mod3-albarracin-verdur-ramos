import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";
import Palettes from "../../components/Palette/Palettes";
import Button from "../../components/Button/Button.jsx";

const Home = () => {

  const { forecast } = useContext(ForecastContext);

  return (
    <>
      <div className="main-container">
        <header>
          <h1>Forecast(pronostico xD)</h1>
          {/* <Button>Crear nuevo pronostico </Button> */}
        </header>
        <Palettes palettes={forecast} />
      </div>
    </>
  );
};

export default Home;
