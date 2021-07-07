import React from 'react';
import { AuthProvider } from '../providers/Auth';
import { Router } from 'react-router-dom';
import history from '../utils/history';
import AppRouter from '../router/AppRouter';

function App() {

  return (
      <Router history={ history }>
          <AuthProvider>
                  <AppRouter />
          </AuthProvider>
      </Router>
  );
}

export default App;
