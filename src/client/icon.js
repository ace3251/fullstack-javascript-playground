import React from 'react';

function Icon(completed) {
  return (
    <span>
     {
      completed
        ? ( '\u2713' )
        : ( '\u2610' )
     }
    </span>
  )
}

export default Icon
