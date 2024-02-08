// const API_KEY = "2f1368422e3be838e47253e419584595";
export const API_KEY = "6eccabe5d9a75220897eac3ba9b02b62";

export interface Coordinates {
  lat: string;
  lon: string;
}

export interface Response {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export interface List {
  dt: number;
  main: MainClass;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: { pod: "n" | "d" };
  dt_txt: Date;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface MainClass {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export const getWeatherByCoordinates = ({ lat, lon }: Coordinates) =>
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
