import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SigIn';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContent';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
