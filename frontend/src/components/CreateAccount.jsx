import React, { useState } from 'react';
import axios from 'axios';
import './CreateAccount.css';


const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    const response = await axios.post('/users', user);

    if (response.status === 200) {
      // User successfully registered!
      console.log('User successfully registered!');
    } else {
      // Handle error
      console.log('Error registering user:', response.data.message);
    }
  };

  return (
    <div>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;