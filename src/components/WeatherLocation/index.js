/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, {Component} from 'react';

import Location from './Location';
import { PropTypes } from 'prop-types';
import WeatherData from './WeatherData';
import { SUN } from '../../constants/weathers';
import  transforWeather, {getCity,getCountry} from './../../services/transformWeather'
import { api_weather} from '../../constants/api_url';
import CircularProgress from '@material-ui/core/CircularProgress';

// //constantes de Api
// const location='3939459';
// const api_key ='c0a529df488f5c261daa4690385f035c';
// const url_base_weather2='http://api.openweathermap.org/data/2.5/forecast';
// const url_base_weather='http://api.openweathermap.org/data/2.5/weather';
// const api_weather= `${url_base_weather}?id=${location}&APPID=${api_key}`;

// const data={
//     temperature: 20,
//     weatherState: SUN,
//     humidity:79,
//     wind:'50 m/s',

// };
// const data2={
//     temperature: 30,
//     weatherState: WINDY,
//     humidity:19,
//     wind:'150 m/s',

// }
// const city_='Cerro de Pasco';
// const country_='Perú';
class WeatherLocation extends Component {
    constructor(props)
    {
        super(props);
        const {city, country,id}=props;
        this.state= {
            city:null,
            country:null,
            id:7626291,
            data: null,
        };
        console.log('constructor');
    };

componentDidMount() {
    console.log('componentDidMount');
    this.handleUpdateClick();
}
componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

}


componentWillMount() {
    console.log('DESCONTINUADO componentWillMount');

}
componentWillUpdate(nextProps, nextState) {
    console.log('DESCONTINUADO  componentWillUpdate');
}



    handleUpdateClick=() =>{
// se pasan en setState solo los datos que se modificaron

// fetch retorna una promise, que es un response el cual, para
// obtener solo la data que requerimos tenemos que usar su metodo .json en nuestro caso
// lo que lo hacemos de la siguiente manera.
         fetch(api_weather(7626291)).then(resolve =>{
            // console.log (resolve);
             return resolve.json();
         }).then(data => {
            console.log ('Resultado del handleUpdateClick');
            const newweather= transforWeather(data);
            const {city,country} =newweather;
             console.log (newweather);
             this.setState({
                 data:newweather,
                 city,
                 country,
                //  city: this.getCity(data),
                //  country:this.getCountry(data),
             });
         });
        
        console.log('actualizado');
        // this.setState({
        //     data:data2,
        // city:'Concepción'});
    };
    // render(){
    //     return  (<div> 
    //         <Location city={this.state.city} country={this.state.country}/>
    //         <WeatherData data={this.state.data}/>
    //         <button onClick={this.handleUpdateClick}>Actualizar</button>
    //     </div>);
    // }
    // cualquiera de ambas funciona bien, lo distinto en la segunda es que  se ha
    render(){
        console.log('render');
        const {data,city,country}= this.state;
        return  (
        <div className='WeatherDataCont'> 
            {city?
                country?
                    <Location city={city} country={country}/>:<span><CircularProgress color='pink' /></span>
                :<span><CircularProgress color='yellow' /></span>}
            {/* <Location city={city} country={country}/> */}
            {data?
                <WeatherData data={data}/>:
                <CircularProgress color='white' ></CircularProgress>
            }
            
            {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
        </div>);
    }
    };

    WeatherLocation.propTypes={
        city:PropTypes.string.isRequired,
        country:PropTypes.string.isRequired,
    }
export default WeatherLocation;