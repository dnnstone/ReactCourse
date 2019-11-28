import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ForecastExtended from './../components'


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