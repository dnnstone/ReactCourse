import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';


class ForecastExtendedContainer extends Component {
    render() {
        console.log(this.props, 'props');
        return (
              this.props.cityId &&
              <ForecastExtended cityId={this.props.cityId} cityName={this.props.cityName}/>
            //  <ForecastExtended cityId={3693057} cityName='SigaIntentando'/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
     cityName:PropTypes.string.isRequired,
    cityId:PropTypes.number.isRequired,

};
const mapStateToProps= state=>({
    cityId: state.cityid, 
     cityName:state.cityname
});
export default connect(mapStateToProps,null)(ForecastExtendedContainer);