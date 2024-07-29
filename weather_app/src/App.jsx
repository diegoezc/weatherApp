import { useEffect, useState } from "react";
import { getCountries } from "./services/getCountries";
import { getCityWeather } from "./services/getWeather";
import {City} from 'country-state-city'
const App =()=>{
  const [countries, setCountries]=useState([]);
  const [cities, setCities]=useState([]);
  const[weather, setWeather]=useState([]);

  useEffect(()=>{
    (async ()=>{
      setCountries(await getCountries());
   
    })();
  },[]);

  const countryHandler = e =>{
    const country = e.currentTarget.value
    const cities2= City.getCitiesOfCountry(country)
    setCities(cities2)
  }

  const citiesHandler =async  e => e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value));
  console.log(weather)

  return(
    <>
      <div className="container-fluid">
        <div className="row d-flex mt-5 justify-content-center">
            <div className="col-lg-5 d-flex title-app justify-content-center">
                <h1 className="">Weather App</h1>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-lg-5 body-app">
                <form action="">
                    <div className="row m-3 d-flex justify-content-center align-items-end">
                        <div className="col-sm-12 col-md-5">
                          <label className="form-label" htmlFor="">Country:</label>
                        </div>
                        <div className="col-sm-12 col-md-7">
                        <select name="" id="" className="form-control"  onChange={countryHandler}>
                            <option value="">Seleccione...</option>
                            {countries.map(country=><option key={country.cca2} value={country.cca2}>{country.name.common}</option>)}
                          </select>
                        </div>
                    </div>
                    <div className="row m-3 d-flex justify-content-center align-items-end">
                        <div className="col-sm-12 col-md-5">
                          <label className="form-label" htmlFor="">City:</label>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <select name="" className="form-control" id="" onChange={citiesHandler}>
                            <option value="">Seleccione...</option>
                            {cities.map((City,index)=><option key={index} value={City.name}>{City.name}</option>)}
                          </select>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center ">
                        <div className="col-sm-12 col-md-7">
                        {weather.main?.temp && (
                          <div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-sm-12 col-md-5 mt-4">
                                    <h1 className="d-flex justify-content-center">{weather.main.temp}°</h1>
                                </div>
                                <div className="col-sm-12 col-md-5 d-flex justify-content-center">
                                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                                </div>
                              </div>
                              <div className="row d-flex justify-content-center">
                                <div className="col-sm-12 col-md-5 d-flex justify-content-center">
                                  <h6 className="fondo d-flex justify-content-center">Max: {weather.main.temp_max}°</h6>
                                </div>
                                <div className="col-sm-12 col-md-5 d-flex justify-content-center">
                                  <h6 className="fondo d-flex justify-content-center">Min: {weather.main.temp_min}°</h6>
                                </div>
                              </div>
                          </div>
                                 )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>

    </>
  );
}

export default App;