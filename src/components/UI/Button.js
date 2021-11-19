import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button className="button">
    <img
      src={props.img}
      className="button__img"
      style={{ height: '16px', width: '16px' }}
      alt=""
    />
  </button>
);

Button.propTypes = {
  img: PropTypes.string,
};

export default Button;
