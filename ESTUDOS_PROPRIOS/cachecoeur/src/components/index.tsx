import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import AAButton from '../components/button/index';

const App: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="body">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AAButton variant="cute" onFunction={() => navigate('button')}>Botão</AAButton>
          <AAButton variant="cute" onFunction={() => navigate('input')}>Input</AAButton>
          <AAButton variant="cute" onFunction={() => navigate('select')}>Select</AAButton>
          <AAButton variant="cute" onFunction={() => navigate('link')}>Link</AAButton>
          <AAButton variant="cute" onFunction={() => navigate('upside')}>Upside</AAButton>
        </div>
        <div className="containerWhite">
          <Outlet />
        </div>
      </div>
    </div >
  );
}

export default App;