const Checkbox = (props) => {
  const { text, styled, onInputChange } = props;

  return (
    <div className={styled}>
      <span className='checkbox__text'>{text}</span>
      <input className='checkbox__input' onChange={onInputChange} id={text} name='gender' type='radio' value={text} />
    </div>
  );
};

export default Checkbox;
