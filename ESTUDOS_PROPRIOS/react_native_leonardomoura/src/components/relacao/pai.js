import React from 'react';
import { Text } from 'react-native';

export default props => {
  return (
    <>
      <Text style={{ color: '#fff' }}>Membros da familia:</Text>
      {props.children}
    </>
  )
}