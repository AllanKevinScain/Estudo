import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';

import Link from './Link';

export default ({ texto, link }) => <>
  <View
    style={{
      alignItems: 'center',
    }}
  >
    <Text>
      {texto}
      <Link cor="#00D954" textoInterno={link} />
    </Text>
  </View>
</>
