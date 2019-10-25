import React, {Component} from 'react';
import PropTypes from 'prop-types';
import  Cities from './../constants/cities';
import './styles.css';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
const days=['Lunes',
'Martes',
'Miercoles',
'Jueves',
'Viernes',
'Sabado',
'Domingo',]
// const data={
//     temperature:10,
//     humidity: 45,
//     weatherState:'normal',
//     wind:'45',

// }
const apikey='c0a529df488f5c261daa4690385f035c';
const url='http://api.openweathermap.org/data/2.5/forecast'

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state={
            cityName:null,
            cityId:null,
        forecastData:null,};
      }
      componentDidMount() {
          //otro fetch o axios
          var url_forecast=`${url}?id=${this.props.cityId}&appid=${apikey}`;

          fetch(url_forecast).then(
              data=>(data.json())
              ).then(
                  weather_data=>{
                  console.log(weather_data,'data');
                  const forecastData=transformForecast(weather_data);
                  this.setState({forecastData});
                 }
                 );
    };
    // componentDidUpdate(prevProps, prevState) {
    //     // console.log('componentDidUpdate');
    //     this.Dnnstone(Cities);
    
    // }
    renderForecastItemDays(){   
        // return days.map(day=>(<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
        return <h3>Render items</h3>;
        
    };
     Dnnstone= Cities => 
              {    const {cityId}= this.props;   
                var Stringo='';   
             Cities.map(city=>
                     {  
                         if(cityId===city.id)
                        {
                             Stringo=city.name+'-'+city.country;
                        }
                     });  
         };
    renderProgress(){
        return <h3>cargando...</h3>;
    }         
    render()
    {
        // const {cityId}= this.props;
        const {cityName, cityId}=this.props;
        const {forecastData}=this.state;
        return (<div>
                    <h2 className='forecast-title'>Pronóstico extendido para {cityName}</h2>
        {forecastData ?
                    this.renderForecastItemDays():
                    this.renderProgress()}
                </div>)
    }

    }

    ForecastExtended.propTypes={
        cityId:PropTypes.number.isRequired,
    }
export default ForecastExtended