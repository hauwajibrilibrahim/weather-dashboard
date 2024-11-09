import React from 'react';

const IconComponent = ({ icon }) => (
  <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
);

export default IconComponent;
