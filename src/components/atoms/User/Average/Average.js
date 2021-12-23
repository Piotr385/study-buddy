import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Average.styled';

const Average = ({ average }) => <Wrapper average={average}>{average}</Wrapper>;

Average.propTypes = {
  average: PropTypes.number.isRequired,
};

export default Average;
