// src/App.jsx

import React from 'react';
import CreateAccount from './components/CreateAccount';

const App = () => {
  const isCreatingAccount = true; // You can manage this state based on user interactions
  const isLoggedIn = false;      // Replace with your actual authentication logic

  if (isCreatingAccount && !isLoggedIn) {
    return <CreateAccount />;
  } else if (!isCreatingAccount && !isLoggedIn) {
    return <Login />;
  }

  return <MainDefaultPage />;
}

export default App;
