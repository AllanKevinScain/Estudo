import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigator from './navigation/stack';

const App: React.FC = () => {
  useEffect(() => {
    console.log('Loading application');
  }, []);

  return (
    <Router>
      <Navigator />
    </Router>
  );
}

export default App;
