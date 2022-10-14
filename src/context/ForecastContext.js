import { createContext, useState } from "react";

export const ForecastContext = createContext({
  forecast: [],
  setForecast: () => {},
});

export const ForecastProvider = ({ children }) => {
  const [forecast, setForecast] = useState([]);
  const value = { forecast, setForecast };

  return (
    <ForecastContext.Provider value={value}>
      {" "}
      {children}{" "}
    </ForecastContext.Provider>
  );
};
