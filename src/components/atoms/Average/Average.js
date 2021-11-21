import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Average.styled';

const Average = ({ average }) => <Wrapper average={average}>{average}</Wrapper>;

Average.propTypes = {
  average: PropTypes.string.isRequired,
};

export default Average;
