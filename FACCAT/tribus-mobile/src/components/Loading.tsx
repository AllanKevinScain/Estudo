import React from 'react';
import { Spinner } from 'native-base';

interface Props {
  label?: string;
  color?: string;
}

const Loading: React.FC<Props> = ({
  label,
  color,
}) => {
  return (
    <>
      <Spinner
        accessibilityLabel={label}
        color={color || 'primary.300'}
        size="lg"
      />
    </>
  );
};

export default Loading;
