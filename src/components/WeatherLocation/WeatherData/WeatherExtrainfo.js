/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//ejemplo de template string
//const otrotexto="nuevo texto";
//const numero=5;
//const texto=`Esto es un literal ${numero} ${otrotexto}`;
//console.log(texto);


import React from 'react';
import PropTypes from 'prop-types';


const WeatherExtraInfo=({humidity,wind})=>(
        <div className='weatherExtraInfoCont'>
        <span className='weatherExtraInfoText'>{'humedad: '+humidity+ '%'}</span>
        <span className='weatherExtraInfoText' >{'vientos '+wind+' '}</span>
        </div>
        ); 

WeatherExtraInfo.propTypes ={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;