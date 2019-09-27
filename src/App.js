
import React,{Component} from 'react';
import Examen from './components/Examen';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

function App () 
{
    return (
    <div className="App">
          {/* <Examen parametro={'Raices'}/>     */}
              <WeatherLocation city={'San Jeronimo'} country={'Perú'} id={7626291}/> 
    </div>);
  }

export default App;
