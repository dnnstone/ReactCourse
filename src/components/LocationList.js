import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
const LocationList = ({cities,onSelectedLocation})=> {
    const handleWeatherLocationClick = city =>{
        console.log('handleWeatherLocationClick dnns1')
        onSelectedLocation(city);
    };
    const strToComponent= cities => (
        cities.map(city=>
            (
                <WeatherLocation 
                key={city.id}
                id={city.id}
                onWeatherLocationClick={()=> handleWeatherLocationClick(city)} />
            ))
    );
    return (<div>
        {strToComponent(cities)}
    </div>);
    
};
LocationList.propTypes ={
    cities:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}
export default LocationList;