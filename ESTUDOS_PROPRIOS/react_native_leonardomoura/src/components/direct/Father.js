import React from 'react';
import Child from './Children';

export default props => {
  let x = 13;
  let y = 100;
  return (
    <>
      <Child A={x} B={y} />
      <Child A={x + 100} B={y + 200} />
    </>
  )
}