import { Pressable, Text } from 'native-base';
import React from 'react';

interface Props {
  linkText: string;
  onFunction: () => void;
  size?: string;
}

const LinkUrl: React.FC<Props> = ({
  linkText,
  onFunction,
  size
}) => {
  return (
    <>
      <Pressable
        onPress={onFunction}
      >
        <Text fontSize={size || 'md'} fontWeight="bold" color="primary.300">{linkText}</Text>
      </Pressable>
    </>
  );
};

export default LinkUrl;
