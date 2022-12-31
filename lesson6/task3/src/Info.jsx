import React from 'react';

const Info = ({ info }) => {
  if (!info) {
    return null;
  }
  return <div className="text">{info}</div>;
};

export default Info;
