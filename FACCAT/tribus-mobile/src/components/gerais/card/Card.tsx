import React from 'react'
import { Flex } from 'native-base';
interface Props {
  colorCustom?: string;
  borderColor?: string;
  borderWidth?: number | string;
  padding?: number;
  mb?: number;
}

const Card: React.FC<Props> = ({
  children,
  colorCustom,
  borderColor,
  borderWidth,
  padding,
  mb
}) => {
  return (
    <Flex
      p={padding}
      rounded="md"
      shadow={4}
      bg={colorCustom || 'primary.50'}
      borderColor={borderColor || null}
      borderWidth={borderWidth || null}
      mb={mb || null}
    >
      {children}
    </Flex>
  )
}

export default Card