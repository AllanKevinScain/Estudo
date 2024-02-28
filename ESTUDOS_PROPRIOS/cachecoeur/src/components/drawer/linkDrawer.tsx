import React from 'react';

import { InterfaceLinkDrawer } from '../../interfaces/drawer';
import AAButon from '../button/index';

const DrawerBody: React.FC<InterfaceLinkDrawer> = (props) => {
  return (
    <AAButon
      onFunction={props.onFunction}
      color="#000"
      background="#fff"
      variant="normal"
      size="md"
    >
      {props.content}
    </AAButon>
  );
}

export default DrawerBody;