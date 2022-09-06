import React from 'react';

function DecreaseButton({ decrease }) {
  return (
    <button className='decrease' onClick={decrease}>
      <span role="img" aria-label="minus">
        -
      </span>
    </button>
  );
}

DecreaseButton.propType = {
  decrease: PropTypes.func.isRequired,
}

export default DecreaseButton;