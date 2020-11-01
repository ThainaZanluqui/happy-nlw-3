import React from 'react';


import './styles/global.css'
import 'leaflet/dist/leaflet.css'

import Routes from './routes'
import AuthContext from './contexts/AuthContext'

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Thaina'}}>
      <Routes />
    </AuthContext.Provider>
  </>
);

export default App;
