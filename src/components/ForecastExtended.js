import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

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
          this.updateCity(this.props.cityId);

    };
    componentWillReceiveProps(nextProps){
        if(nextProps.cityId !== this.props.cityId)
        {   this.setState({forecastData:null});
            this.updateCity(nextProps.cityId);
        }
    }
    updateCity =cityId=>{
                  //otro fetch o axios
                  var url_forecast=`${url}?id=${cityId}&appid=${apikey}`;

                  fetch(url_forecast).then(
                      data=>(data.json())
                      ).then(
                          weather_data=>{
                        //   console.log(weather_data,'data');
                          const forecastData=transformForecast(weather_data);
                        //   console.log(forecastData, "forecastData");
                          this.setState({forecastData});
                         }
                         );
    }

    // componentDidUpdate(prevProps, prevState) {
    //     // console.log('componentDidUpdate');
    //     this.Dnnstone(Cities);
    
    // }
    renderForecastItemDays(forecastData){  
return forecastData.map(forecast=>(
    <ForecastItem    key={`${forecast.weekDay}${forecast.hour}`}
                 weekDay={forecast.weekDay} 
                    hour={forecast.hour}
                    data={forecast.data}></ForecastItem>
))
       //  return days.map(day=>(<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
       // return <h3>Render items</h3>;
        
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
        const {cityName}=this.props;
        const {forecastData}=this.state;
        return (<div>
                    <h2 className='forecast-title'>Pronóstico extendido para {cityName}</h2>
        {forecastData ?
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()}
                </div>)
    }

    }

    ForecastExtended.propTypes={
        cityId:PropTypes.number.isRequired,
    }
export default ForecastExtended