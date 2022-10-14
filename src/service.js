const SERVER_DOMAIN = "https://api.open-meteo.com/v1";

export const getForecast = async (lat, long) => {
  try {

    const response = await 
    fetch(`${SERVER_DOMAIN}/forecast?current_weather=true&latitude=${lat}&longitude=${long}&timezone=America/Argentina/Jujuy`
    );
   
    return response.json();
  } catch {
    throw new Error("could not fetch forecast");
  }
};

