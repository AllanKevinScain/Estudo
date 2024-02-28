import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Layoult from '../layoult/index';
import Login from '../pages/login/index';
import Components from '../components/index';

import Button from '../components/button/index';
import Input from '../components/input/index';
import Select from '../components/select/index';
import Link from '../components/link/index';
import Upside from '../components/upside/index';

export default function MainRoutes() {
  const [valueInput, setValueInput] = React.useState<string | number>('');
  return (
    <Routes>
      <Route path="/" element={<Layoult />}>

        <Route path="components" element={<Components />}>

          <Route path="button" element={
            <div>
              <Button
                content="Login"
                onFunction={() => console.log('Clicou no botãozão')}
                size="xl"
              />
              <div style={{ padding: 2 }} />
              <Button
                content="Hello"
                onFunction={() => console.log('Clicou no botãozão')}
                size="lg"
              />
              <div style={{ padding: 2 }} />
              <Button
                content="Hello"
                onFunction={() => console.log('Clicou no botãozão')}
                size="md"
              />
              <div style={{ padding: 2 }} />
              <Button
                content="Hello"
                onFunction={() => console.log('Clicou no botãozão')}
                size="sm"
              />
              <div style={{ padding: 2 }} />
              <Button
                content="Hello"
                onFunction={() => console.log('Clicou no botãozão')}
                size="xs"
              />
            </div>
          } />

          <Route path="input" element={
            <div>
              <Input
                value={valueInput}
                onFunctionChange={(e) => setValueInput(e.target.value)}
                size="xl"
              />
              <div style={{ padding: 2 }} />
              <Input
                value={valueInput}
                onFunctionChange={(e) => setValueInput(e.target.value)}
                size="lg"
              />
              <div style={{ padding: 2 }} />
              <Input
                value={valueInput}
                onFunctionChange={(e) => setValueInput(e.target.value)}
                size="md"
              />
              <div style={{ padding: 2 }} />
              <Input
                value={valueInput}
                onFunctionChange={(e) => setValueInput(e.target.value)}
                size="sm"
              />
              <div style={{ padding: 2 }} />
              <Input
                value={valueInput}
                onFunctionChange={(e) => setValueInput(e.target.value)}
                size="xs"
              />
            </div>
          } />
          <Route path="select" element={<Select />} />

          <Route path="link" element={
            <div>
              <Link
                content='uuuuuu vagabundo'
                title={true}
                taken={true}
                color='#f00'
              />
            </div>
          } />

          <Route path="upside" element={
            <Upside
              image="https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg"
              alt="Minha imagem"
            />
          }
          />

        </Route>

        <Route path="login" element={<Login />} />

      </Route>c


      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};
