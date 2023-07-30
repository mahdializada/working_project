import React from 'react';
// import PropTypes from 'prop-types';

function Computer({src,name,amount,cost}) {
    
    return (
        <>
            <ul>
                <li>Name: {name}</li>
                <li>Amount: {amount}</li>
                <li>Cost: {cost}</li>
            </ul>
            <img src={src} alt="No Picture" />
        </>
  )
}

export default Computer
