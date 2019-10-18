/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    
} from './../../../constants/weathers';
//arrow function con datos con parentesis, si es unico o si es una operacion con parentesis, si 
//hay mas de 2 lineas se usa llaves
// const WeatherDatas=()=> <div> esto es guerrass</div>;

// const WeatherDatas=()=> (<div> esto es guerrss</div>);

//const WeatherDatas=()=> {
//    var pun= 8;
//    return lety+pun;
//};

//const WeatherDatas=()=> {
//    var pun= 8;
//    return <div>{lety+pun}</div>;
//};
const icons={
        [CLOUD]:'cloud',
        [CLOUDY]:'cloudy',
        [SUN]:'day-sunny',
        [RAIN]:'rain',
        [SNOW]:'snow',
        [WINDY]:'windy',
}
const getWeatherIcon = weatherState => {
    const icon=icons[weatherState];
    const sizeIcon='2x';
    if(icon)
        return  <WeatherIcons  className='wicon weatherTemperatureIcon'name={icon} size={sizeIcon}/>
    else
        return  <WeatherIcons className='wicon weatherTemperatureIcon' name={'day-sunny'} size="4x"/>
}
const WeatherTemperature= ({temperature,weatherState}) => 
{
  return  <div className='weatherTemperatureCont' >
    {getWeatherIcon(weatherState)}
    <span className='temperature'>{temperature}</span> 
    <span className='temperatureType'>{`C`}</span>
    </div>
};
WeatherTemperature.propTypes ={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};
//var WeatherDatas=()=> {
//    var pun= 8;
//    return <div>{lety+pun+9}</div>;
//};
export default WeatherTemperature;