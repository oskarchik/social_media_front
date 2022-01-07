const Picker = ({ days, months, year, styled, onInputChange, error, dateError }) => {
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
        <select
          className={styled}
          onChange={(e) => {
            onInputChange(e);
          }}
          style={dateError.error ? error : null}
          id='day'
          name='dateOfBirth'
          defaultValue={currentDay}
        >
          {days.map((day) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </select>
      )}
      {months && (
        <select
          className={styled}
          onChange={(e) => {
            onInputChange(e);
          }}
          style={dateError.error ? error : null}
          id='month'
          name='dateOfBirth'
          defaultValue={currentMonth}
        >
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
          onChange={(e) => {
            onInputChange(e);
          }}
          style={dateError.error ? error : null}
          id='year'
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
