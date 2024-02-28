import React from 'react';

import InterfaceUpside from '../../interfaces/upside';

const Upside: React.FC<InterfaceUpside> = (props) => {

  const text = () => {
    return (
      <div style={{ fontSize: 40, color: '#000' }}>
        {
          !props.children ? props.children : props.content
        }
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: props.side === 'top' || props.side === 'bottom' ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {props.side === 'top' || props.side === 'left' ? text() : "Escreva algo aqui"}
        <img
          style={{ padding: props.spacing || '5%' }}
          height={props.width || '15%'}
          width={props.height || '15%'}
          src={require('../assets/logo.png')}
          alt={props.alt}
        />
        {props.side === 'bottom' || props.side === 'right' ? text() : null}
      </div>
    </div>
  );
};

export default Upside;