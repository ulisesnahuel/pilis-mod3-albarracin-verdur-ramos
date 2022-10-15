import { Outlet, Link } from "react-router-dom";
import forecastLogo from "../../assets/forecast.png";
import "./Navigations.css";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={forecastLogo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link sign-in" to="Forecast">
            Nuevo pronostico
          </Link>
          <Link className="nav-link sign-in" to="/">
            Volver
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
