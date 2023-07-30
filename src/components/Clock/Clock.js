import React from 'react';

function Clock(props) {
  const { color, time } = props;

  return (
    <div style={{ color: color }}>
      <h1>Clock</h1>
      <p>Current Time: {time}</p>
    </div>
  );
}

export default Clock;
