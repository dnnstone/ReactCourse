import React, { Component } from 'react';
import ForecastExtended from './../components'
import PropTypes from 'prop-types';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            <ForecastExtended city={this.city}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city:PropTypes.string.isRequired,

};

export default ForecastExtendedContainer;