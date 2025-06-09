
import './App.css';
// import Login from './components/login/login'
import 'primeicons/primeicons.css';
import { useState } from 'react';
import NavContext from './contexts/NavContext';
import RouterComponent from './Router';
import NotificationHandler from './components/custom/notification-handler';

const App = () => {
  const [nav, setNav] = useState('');
  const value = { nav, setNav };
  return (
    <NavContext.Provider value={value}>
            <NotificationHandler />

      <RouterComponent />
    </NavContext.Provider>
  );
}

export default App;
