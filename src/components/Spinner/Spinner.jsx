import { StyledSpinner } from './Spinner.style';

const Spinner = () => {
  return (
    <StyledSpinner className='spinner'>
      <div className='loading-spinner'></div>
    </StyledSpinner>
  );
};

export default Spinner;
