import { ajax } from "../tools/ajax";

export const getCityWeather = async(ciudad)=>{
    const optionRequest={
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather`,
        params:{
          q: ciudad,
          appid: "e41e16376bc360660fd8e7886e9c13f1",
          units: "metric" //para trabajar en unidades metricas, o en centigrados
        }
       
      };
      return await ajax(optionRequest);
}
