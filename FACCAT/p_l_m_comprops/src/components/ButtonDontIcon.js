import React from 'react';
import { Button, Icon } from '@ui-kitten/components';

export default ({ cor, textoInterno }) => <Button
  style={{
    marginVertical: 5,
    backgroundColor: cor
  }}
>
  {textoInterno}
</Button>

