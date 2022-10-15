import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";
import Palettes from "../../components/Palette/Palettes";


const Home = () => {

  const { forecast } = useContext(ForecastContext);

  return (
    <>
      <div className="main-container">
        <header>
          <h1 className="title"><p>pronosticos de clima de sus lugares   </p></h1>
        </header>
        <Palettes palettes={forecast} />
      </div>
    </>
  );
};

export default Home;
