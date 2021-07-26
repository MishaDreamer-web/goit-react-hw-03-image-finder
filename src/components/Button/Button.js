import React from 'react';

import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => (
  <button onClick={onLoadMore} className={Button}>
    Load More
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;
