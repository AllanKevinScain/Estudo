import React from 'react';
import { AiFillApple } from 'react-icons/ai';

import InputProps from '../../interfaces/input';

const Input: React.FC<InputProps> = props => {

  /* height */
  const heights = () => {
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

  /* variants */
  const variants = () => {
    switch (props.variant) {
      case 'normal':
        return props.color || "#000";
      case 'cute':
        return props.color || "#000";
      case 'ghost':
        return 'transparent';
      default:
        return props.color || "#000";
    }
  };

  /* padding */
  const paddings = () => {
    switch (props.size) {
      case 'xl':
        return '8px 16px 8px 16px';
      case 'lg':
        return '6px 12px 6px 12px';
      case 'sm':
        return '4px 8px 4px 8px';
      case 'xs':
        return '4px 8px 4px 8px';
      default:
        return '5px 10px 5px 10px';
    }
  };

  /* border-radius */
  const radius = () => {
    switch (props.variant) {
      case 'normal':
        return 0;
      case 'cute':
        return 5;
      case 'ghost':
        return 8;
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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: heights(),
        width: '100%',
        maxWidth: '100%',
        padding: paddings(),
        backgroundColor: props.background || '#fff',
        borderStyle: 'solid',
        borderRadius: radius(),
        borderWidth: 2,
        borderColor: variants() || '#000',
      }}
      onClick={props.onFunctionClick}
      onBlur={props.onFunctionBlur}
      onFocus={props.onFunctionFocus}
    >
      <input
        className="inputAnimation"
        style={{
          height: heights(),
          width: '100%',
          backgroundColor: props.background || '#fff',
          fontSize: fontSizes(),
          opacity: props.variant === 'cute' ? 0.5 : 1,
        }}
        value={props.value}
        placeholder={props.placeholder || "placeholder"}
        type={props.type}
        onChange={props.onFunctionChange}
        onClick={props.onFunctionClick}
        onBlur={props.onFunctionBlur}
        onFocus={props.onFunctionFocus}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          height: heights(),
          fontSize: fontSizes(),
          opacity: props.variant === 'cute' ? 0.5 : 1,
        }}
      >
        {props.icon || <AiFillApple />}
      </div>
    </div>
  );
};

export default Input;