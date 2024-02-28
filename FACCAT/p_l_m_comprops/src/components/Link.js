import React from 'react';
import { Text } from '@ui-kitten/components';

export default ({ cor, textoInterno }) => <Text
  style={{
    color: cor,
  }}
>
  {textoInterno}
</Text>
