import React from 'react'
import { Flex, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface Props {
  msg: string;
}

const Error: React.FC<Props> = ({
  msg
}) => {
  return (
    <Flex mt="5" mb="4" direction="row" align="center" justify="center">
      <Icon name="alert-circle" size={30} color="#BB4F4F"/>
      <Text bold ml={2} color="danger.400" fontSize="md">{msg}</Text>
    </Flex>
  )
}

export default Error