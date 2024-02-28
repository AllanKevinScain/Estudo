import React from 'react';
import { Text } from 'native-base';
interface Props {
  msg: string;
}

const ErrorText: React.FC<Props> = ({
  msg
}) => {
  return (
    <>
      <Text mt='0.75' ml='2.5' fontSize="md" color="error.400">
        {msg || null}
      </Text>
    </>
  );
};

export default ErrorText;
