import React from "react";
import { Button } from 'native-base';
import { StyleProp, ViewStyle } from "react-native";

interface Props {
  onFunction: () => void;
  customValue: string;
  customColor?: 'string';
  size?: string,
  variant?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const ButtonMain: React.FC<Props> = ({
  onFunction,
  customValue,
  customColor,
  size,
  variant,
  isDisabled,
  isLoading,
  style
}) => {
  return (
    <>
      <Button
        bg={customColor || 'primary.300'}
        rounded='6xl'
        style={style}
        onPress={onFunction}
        size={size}
        variant={variant}
        isDisabled={isDisabled}
        isLoading={isLoading}
      >
        {customValue}
      </Button>
    </>
  )
}

export default ButtonMain