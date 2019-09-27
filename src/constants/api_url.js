
//constantes de Api
const location='3939459';
const api_key ='c0a529df488f5c261daa4690385f035c';
const url_base_weather2='http://api.openweathermap.org/data/2.5/forecast';
const url_base_weather='http://api.openweathermap.org/data/2.5/weather';
export const api_weather = (id)=>{
    return `${url_base_weather}?id=${id}&APPID=${api_key}`;
}
//export const api_weather= `${url_base_weather}?id=${location}&APPID=${api_key}`;