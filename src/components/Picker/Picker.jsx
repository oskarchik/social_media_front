const Picker = ({ days, months, year, styled, onInputChange }) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toLocaleString('en-us', { month: 'short' });
  let years = [];

  for (let i = year; i <= currentDate.getFullYear(); i++) {
    years.push(i);
  }

  return (
    <>
      {days && (
        <select className={styled} onChange={onInputChange} id='days' name='dateOfBirth' defaultValue={currentDay}>
          {days.map((day) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </select>
      )}
      {months && (
        <select className={styled} onChange={onInputChange} id='months' name='dateOfBirth' defaultValue={currentMonth}>
          {months.map((month) => (
            <option value={month} key={month}>
              {month}
            </option>
          ))}
        </select>
      )}
      {year && (
        <select
          className={styled}
          onChange={onInputChange}
          id='years'
          name='dateOfBirth'
          defaultValue={currentDate.getFullYear()}
        >
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default Picker;
