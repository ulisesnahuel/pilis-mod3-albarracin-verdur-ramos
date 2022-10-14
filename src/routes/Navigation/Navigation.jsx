import { Outlet,Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/"></Link>
        <Link to="/Forecast">Forecast</Link>
      </div>
      <Outlet/>
    </>
  );
};
export default Navigation;