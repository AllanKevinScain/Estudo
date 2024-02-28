import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';
import DrawerBody from '../components/drawer/body';

const App: React.FC = () => {

  const [appear, setAppear] = useState(false);
  const [time, setTime] = useState(true);
  const navigate = useNavigate();

  const RenderDrawer = () => {
    switch (time) {
      case false:
        setTimeout(() => {
          setTime(true);
          setAppear(false);
        }, 900);
        return (
          <DrawerBody
            className="DrawerClose"
            appearDrawer={() => setTime(value => !value)}
            linkNavigateFirst={() => navigate('components')}
            linkNavigateSecond={() => navigate('login')}
          />
        );
      default:
        return (
          <DrawerBody
            className="DrawerOpen"
            appearDrawer={() => setTime(value => !value)}
            linkNavigateFirst={() => navigate('components')}
            linkNavigateSecond={() => navigate('login')}
          />
        );
    }
  };

  return (
    <div className="App">
      {/* Drawer */}
      {
        appear
          ? RenderDrawer()
          : <div className="AiOutlineMenu-menu-style" onClick={() => setAppear(value => !value)}>
            < AiOutlineMenu className="AiOutlineMenu-icon-style" />
          </div>
      }
      {/* conteúdo */}
      <Outlet />
    </div >
  );
}

export default App;