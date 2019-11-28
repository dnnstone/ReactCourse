// rccp +tab, genera todo el codigo de abajo
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; //conecta las librerias react y redux
import { actionCreator, setCityId } from './../actions';
import LocationList from './../components/LocationList';
//import  Cities from './../constants/cities';

class LocationListContainers extends Component {
    handleSelectedLocation = city => {
        // this.setState({
        //       cityId:city.id,
        //       cityName:city.name+', '+city.country,x|2
        //     });
       // const action= {type: 'setcityName', value: city.name} ;
       // store.dispatch(action);  
      //  store.dispatch(actionCreator(city.name));   
    
      this.props.actionCreatorCity(city.name);
      this.props.actionCreatorCityId(city.id);  // debe coincidir con el nombre de la funcion de abajo line 91: actionCreator: value=> dispatch(actionCreator(value))
        //console.log('handleSelectedLocation dnns '+city.id+ ' nombre: '+city.name);
    }
    render() {
        return (
            <LocationList cities={this.props.cities} 
            onSelectedLocation={this.handleSelectedLocation}/>
        );
    }
}

LocationListContainers.propTypes = {
    actionCreatorCity:PropTypes.func.isRequired,
    Cities:PropTypes.array.isRequired,

};
const mapDispatchToProps=dispatch => ({
    actionCreatorCity: value=> dispatch(actionCreator(value)),
    actionCreatorCityId: value=> dispatch(setCityId(value)),
  });
export default connect(null,mapDispatchToProps)(LocationListContainers);