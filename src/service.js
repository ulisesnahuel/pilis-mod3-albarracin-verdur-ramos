const SERVER_DOMAIN = "https://api.open-meteo.com/v1";

export const getForecast = async (lat, long) => {
  try {
    /*const response = await fetch(`${SERVER_DOMAIN}/color-palettes`);*/
    // parseFloat(lat);
    // parseFloat(long);
    const response = await 
    fetch(`${SERVER_DOMAIN}/forecast?current_weather=true&latitude=${lat}&longitude=${long}&timezone=America/Argentina/Jujuy`
    );
    // const data = await response.json();
    // console.log(data);
    return response.json();
  } catch {
    throw new Error("could not fetch forecast");
  }
};

/*export const getTags = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/tags`);
    return response.json();
  } catch {
    throw new Error('could not fetch tags');
  }
};*/
