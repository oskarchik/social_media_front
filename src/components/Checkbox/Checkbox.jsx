import React from 'react';

const Checkbox = (props) => {
  const { text, styled } = props;

  return (
    <div className={styled}>
      <span className='checkbox__text'>{text}</span>
      <input className='checkbox__input' type='radio' name='gender' />
    </div>
  );
};

export default Checkbox;
