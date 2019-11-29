
import React,{Component} from 'react';
//import { connect } from 'react-redux'; //conecta las librerias react y redux
// import WeatherLocation from './components/WeatherLocation';
import  Cities from './constants/cities';
//import LocationList from './components/LocationList';

import {Grid,Col, Row } from 'react-flexbox-grid';
//import PropTypes from 'prop-types';
//import { createStore } from 'redux'; 
// import { actionCreator } from './actions';
//import { store } from './store';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainers';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';

// const store= createStore(()=>{},
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {


//   handleSelectedLocation = city => {
//     this.setState({
//           cityId:city.id,
//           cityName:city.name+', '+city.country,
//         });
//    // const action= {type: 'setcityName', value: city.name} ;
//    // store.dispatch(action);  
//   //  store.dispatch(actionCreator(city.name));   

//   this.props.actionCreatorCity(city.name);  // debe coincidir con el nombre de la funcion de abajo line 91: actionCreator: value=> dispatch(actionCreator(value))
//     //console.log('handleSelectedLocation dnns '+city.id+ ' nombre: '+city.name);
// }

render () 
{  
    return (
    <Grid >
      <Row><AppBar><ToolBar><Typography variant='title' color='Inherit' >Weather App </Typography></ToolBar></AppBar></Row>
      <Row>
        <Col xs={12} md={6}>

          {/* <Examen parametro={'Raices'}/>     */}
              
              {/* <WeatherLocation city={'San Jeronimo'} country={'Perú'} id={7626291}/> 
              <WeatherLocation city={'San Jeronimo'} country={'Perú'} id={3939459}/> 
              <WeatherLocation city={'San Jeronimo'} country={'Perú'} id={3932834}/> 
              <WeatherLocation city={'San Jeronimo'} country={'Perú'} id={3937733}/> 
              <WeatherLocation city={'San Jeronimo'} country={'Perú'} id={3928924}/>  */}

            {/* {strToComponents(Cities)}   */}
            {/* <LocationList cities={Cities} 
              onSelectedLocation={this.handleSelectedLocation}/> */}

            <LocationListContainer cities={Cities} />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={2}>
          <div className='details'>

          <ForecastExtendedContainer></ForecastExtendedContainer>

            {/* {cityId&& <ForecastExtended cityId={cityId} cityName={cityName}></ForecastExtended>
              } */}
            
          </div>
          </Paper>
          
        </Col>
      </Row>
    </Grid>);
  }

}
// usado el map en funciones, aprendemos que para que se maneje arreglos de componentes, se tiene q agregar el key que
//tendria que ser un valor unico como el index, o tambien como en nuestro caso podriamos darle como valo el city.id

// const strToComponents = cities=>(
//   cities.map ((city,index)=><WeatherLocation key={index} city={'San Jeronimo'} country={'Perú'}  id={city.id} />)
// );

// App.propTypes={
//   actionCreatorCity:PropTypes.func.isRequired,
// }

// const mapDispatchToProps=dispatch => ({
//   actionCreatorCity: value=> dispatch(actionCreator(value))
// });
export default App;
