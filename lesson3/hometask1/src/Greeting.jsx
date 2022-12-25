import React from 'react';
import moment from 'moment';

const Greeting = props => {
  const yearsOld = date => moment().diff(date, 'years');

  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${yearsOld(
      props.birthDate,
    )} years old`}</div>
  );
};

export default Greeting;
