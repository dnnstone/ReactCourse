
import React,{Component} from 'react';
// import WeatherLocation from './components/WeatherLocation';
import  Cities from './constants/cities';
import LocationList from './components/LocationList';
import {Grid,Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import './App.css';

class App extends Component {

  handleSelectedLocation = city => {
    console.log('handleSelectedLocation dnns '+city.id+ ' nombre: '+city.name);
}

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
            <LocationList cities={Cities} 
              onSelectedLocation={this.handleSelectedLocation}/>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
          <div className='details'>wacachi</div>
          </Paper>
          
        </Col>
      </Row>
    </Grid>);
  }

const 
}
// usado el map en funciones, aprendemos que para que se maneje arreglos de componentes, se tiene q agregar el key que
//tendria que ser un valor unico como el index, o tambien como en nuestro caso podriamos darle como valo el city.id

// const strToComponents = cities=>(
//   cities.map ((city,index)=><WeatherLocation key={index} city={'San Jeronimo'} country={'Perú'}  id={city.id} />)
// );


export default App;
