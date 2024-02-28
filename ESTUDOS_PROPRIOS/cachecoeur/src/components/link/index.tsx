import React from 'react';

import LinkProps from '../../interfaces/link';

const Link: React.FC<LinkProps> = (props) => {

  return (
    <>
      <div>
        {
          props.title
            ? <a href="https://www.google.com.br/" style={{ textDecoration: props.taken ? 'underline' : 'none', color: props.color }}>
              {props.children ? props.children : <h1>{props.content}</h1>}
            </a>
            : <a href="https://www.google.com.br/" style={{ textDecoration: props.taken ? 'underline' : 'none', color: props.color }}>
              {props.children ? props.children : <div>{props.content}</div>}
            </a>
        }
      </div>
    </>
  );
};

export default Link;