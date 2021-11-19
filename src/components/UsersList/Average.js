import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/Average.styled';

const Average = (props) => (
  <Wrapper average={props.average}>{props.average}</Wrapper>
);

Average.propTypes = {
  average: PropTypes.string.isRequired,
};

export default Average;
