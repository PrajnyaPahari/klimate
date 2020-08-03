import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "00edfd80aa6ea7a6004c502c0efc56a1";

export const fetchData = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
