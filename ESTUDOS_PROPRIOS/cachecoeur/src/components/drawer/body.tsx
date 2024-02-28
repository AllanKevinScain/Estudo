import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { InterfaceBodyDrawer } from '../../interfaces/drawer';
import DrwawerLink from '../drawer/linkDrawer';

const DrawerBody: React.FC<InterfaceBodyDrawer> = (props) => {
  return (
    <div className={props.className}>
      <div className="App-header" onClick={props.appearDrawer}>
        <div className="AiOutlineMenu-menu-style">
          < AiOutlineMenu className="AiOutlineMenu-icon-style" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <DrwawerLink onFunction={props.linkNavigateFirst} content="Componentes" />
        <DrwawerLink onFunction={props.linkNavigateSecond} content="Login" />
      </div>
    </div>
  );
}

export default DrawerBody;