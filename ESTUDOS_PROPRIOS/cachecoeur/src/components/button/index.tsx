import React from 'react';

import ButtonProps from '../../interfaces/button';

const Button: React.FC<ButtonProps> = (props) => {

  /* padding */
  const paddings = () => {
    switch (props.size) {
      case 'xl':
        return 20;
      case 'lg':
        return 15;
      case 'sm':
        return 8;
      case 'xs':
        return 5;
      default:
        return 10;
    }
  };

  /* font-size */
  const fontSizes = () => {
    switch (props.size) {
      case 'xl':
        return 35;
      case 'lg':
        return 25;
      case 'sm':
        return 15;
      case 'xs':
        return 10;
      default:
        return 20;
    };
  };

  /* variant */
  const variants = () => {
    switch (props.variant) {
      case 'ghost':
        return 'transparent';
      case 'normal':
        return props.background || '#e0e0e0';
      case 'cute':
        return props.background || '#e0e0e0';
      default:
        return '#e0e0e0';
    };
  };

  /* case */
  const cases = () => {
    switch (props.case) {
      case 'upper':
        return props.content ? props.content.toUpperCase() : `Escreva algo`.toUpperCase();
      default:
        return props.content;
    }
  };

  /* border-radius */
  const radius = () => {
    switch (props.variant) {
      case 'ghost':
        return 10;
      case 'normal':
        return 8;
      case 'cute':
        return 12;
      default:
        return 0;
    };
  };

  /* border-color */
  const borderColor = () => {
    switch (props.variant) {
      case 'ghost':
        return props.color || '#000';
      case 'normal':
        return props.background || '#e0e0e0';
      case 'cute':
        return props.background || '#e0e0e0';
      default:
        return '#e0e0e0';
    };
  };

  return (
    <div
      className={
        props.animation === 'none'
          ? "buttonEffectNoAnimation"
          : "buttonEffect"
      }
      onClick={props.onFunction}
      style={{
        backgroundColor: variants(),
        width: "auto",
        height: "auto",
        borderRadius: radius(),
        borderColor: borderColor(),
        color: props.color || '#000',
        padding: paddings(),
        opacity: props.variant === 'cute' ? 0.5 : 1,
      }}
    >
      <div
        style={{
          fontSize: fontSizes(),
        }}
      >
        {props.children ? props.children : cases()}
      </div>
    </div >
  );
};

export default Button;