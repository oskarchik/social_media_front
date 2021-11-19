import React from 'react';

const Picker = (props) => {
  const { days, months, year, styled, onInputChange } = props;

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
      {/* {years && (
        <select className={styled} defaultValue={currentDate.getFullYear()}>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      )} */}
      {/* {months &&
        months.map((month) =>
          month !== currentMonth ? (
            <option value={month} key={month}>
              {month}
            </option>
          ) : (
            <option value={month} key={month} selected>
              {month}
            </option>
          )
        )}
      {year &&
        years.map((year) =>
          year !== currentDate.getFullYear() ? (
            <option value={year} key={year}>
              {year}
            </option>
          ) : (
            <option value={year} key={year} selected>
              {year}
            </option>
          )
        )} */}
    </>
  );
};

export default Picker;
