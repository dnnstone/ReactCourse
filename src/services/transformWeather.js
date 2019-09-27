import ConvertUnits from 'convert-units';
import { SUN, WINDY } from './../constants/weathers';   
   
 const transformWeather= weather_data =>{                                                                                                                                                                                                                                                                                                                                               
        const {humidity, temp} = weather_data.main;
        const {speed}= weather_data.wind;
        const weatherState=getWeatherState(weather_data);
        
        const temperature=getTemp(temp);

        const data={
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
            city: getCity(weather_data),
            country: getCountry(weather_data),
        };
        return data;
    };
  const  getCity =weather_data =>{
        const {name}=weather_data;
        return name;
    };
  const  getCountry =weather_data =>{
        const {country}= weather_data.sys;
        return country;
    };
 const   getWeatherState = weather_data =>{
        return SUN;
    };
 const   getTemp= kelvin => {
        return Number(ConvertUnits(kelvin).from('K').to('C').toFixed(2));
    };

    export default transformWeather;