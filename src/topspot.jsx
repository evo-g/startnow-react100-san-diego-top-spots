import React from 'react';

export default props => (
  <div className='card m-2 bg-secondary'>
    <div className='card-header bg-dark'>
      <h4>{props.name}</h4>
    </div>
    <div className='card-body'>
      <p>{props.description}</p>
      <a href={'https://maps.google.com/?q=' + props.location[0] + ',' + props.location[1]}
        target='blank'
        className='btn btn-primary'>Open in Map</a>
    </div>
    </div>

    );