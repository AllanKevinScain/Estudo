import React, { useState } from 'react';
import Upside from '../../components/upside';
import Input from '../../components/input';

const App: React.FC = () => {

  const [user, setUser] = useState<any>('');
  const [pass, setPass] = useState<any>('');

  return (
    <div className="loginBackground">

      <div className="infoContainer">
        {/* Logo e Titulo */}
        <Upside alt='Logo' image='../../assets/logo.png' />

        {/* Input de Email */}
        <Input
          onFunctionChange={(e) => setUser(e.target.value)}
          value={user}
        />

        {/* Input de Senha */}
        <Input
          onFunctionChange={(e) => setPass(e.target.value)}
          value={pass}
        />
      </div>

    </div >
  );
}

export default App;