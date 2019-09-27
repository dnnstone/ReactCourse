/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import PropTypes from 'prop-types';
const Location=(props)=>{
    //Destructuring
    const {city,country}=props
  //  const city=props.city;
  //  const city=props.country;
        return (<div className='LocationCont'><h1>{city}-{country}</h1></div>);
};
Location.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired, 
};

export default Location