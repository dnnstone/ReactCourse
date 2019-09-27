/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import WeatherExtrainfo from './WeatherExtrainfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    
} from './../../../constants/weathers';
import './styles.css';
import { printReceived } from 'jest-matcher-utils';
//arrow function con datos con parentesis, si es unico o si es una operacion con parentesis, si 
//hay mas de 2 lineas se usa llaves
// const WeatherDatas=()=> <div> esto es guerrass</div>;

// const WeatherDatas=()=> (<div> esto es guerrss</div>);
var lety=5;

//const WeatherDatas=()=> {
//    var pun= 8;
//    return lety+pun;
//};

//const WeatherDatas=()=> {
//    var pun= 8;
//    return <div>{lety+pun}</div>;d
//};

//var WeatherDatas=()=> {
//    var pun= 8;
//    return <div>{lety+pun+9}</div>;
//};

// const WeatherData=({data})=>{
//     const {temperature,weatherState, humidity, wind}=data;
//     return (<div className='weatherDataCont'>
//     <WeatherTemperature 
//     temperature={temperature} 
//     weatherState={weatherState}/>
//     <WeatherExtrainfo humidity={humidity} wind={wind}/>
// </div>)
// };

const WeatherData=({data:{temperature,weatherState, humidity, wind}})=>(
<div className='WeatherData'>
    <WeatherTemperature 
    temperature={temperature} 
    weatherState={weatherState}/>
    <WeatherExtrainfo humidity={humidity} wind={wind}/>
</div>)
;

WeatherData.propTypes ={
    data:PropTypes.shape({
     temperature: PropTypes.number.isRequired,
     weatherState: PropTypes.string.isRequired,
     humidity: PropTypes.number.isRequired,
     wind: PropTypes.string.isRequired, 
    })
};
export default WeatherData;