import { createContext } from "react";

export const ForecastContext = createContext({
    forecast: [],
    setForecast: () => {}
});