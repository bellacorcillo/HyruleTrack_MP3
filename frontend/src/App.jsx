import React from 'react';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';  // Add this line

const App = () => {
  const isCreatingAccount = true; // You can manage this state based on user interactions
  const isLoggedIn = false;      // Replace with your actual authentication logic

  if (isCreatingAccount && !isLoggedIn) {
    return <CreateAccount />;
  } else if (!isCreatingAccount && !isLoggedIn) {
    return <Login />;
  }

  // If none of the above conditions match, return the CreateAccount
  return <CreateAccount />;
}

export default App;

