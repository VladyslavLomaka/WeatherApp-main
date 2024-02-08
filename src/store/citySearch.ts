import { makeAutoObservable } from "mobx";
import rawList from "../constants/cities500.json";

const CityList = rawList as City[];

const cityExample = {
  id: "3041563",
  name: "Andorra la Vella",
  country: "AD",
  admin1: "Andorra la Vella",
  lat: "42.5077900",
  lon: "1.5210900",
  pop: "20430",
};

export type City = typeof cityExample;

class CitySearch {
  cities: City[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  searchCity(query: string) {
    this.cities = CityList.filter((city) =>
      city.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    this.cities.length = 30;
    this.cities = this.cities.filter(Boolean);
  }

  get resultsCount() {
    return this.cities.length;
  }
}

export const SearchCity = new CitySearch();
