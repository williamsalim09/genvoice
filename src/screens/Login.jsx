import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [inputUsername, setInputUsername] = useState(''); //input forms
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // toggle password visibility

//   login. verify with mirage.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/1');
      const user = await response.json();

      if (user.username === inputUsername && user.password === inputPassword) {
        onLogin(inputUsername);
      } else {
        alert('Invalid username or password!');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      alert('An error occurred. Please try again.');
    }
  };

//   frontend
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 h-96 mx-auto mt-10 align-middle"> {/* Adjusted width and height */}
      <h2 className="text-3xl text-center text-black font-bold mb-4">Login To GenVoice</h2>
      <input
        type="text"
        placeholder="Username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
      />
      <div className="relative mb-4">
        <input
          type={showPassword ? 'text' : 'password'} // Toggle password visibility
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Login
      </button>
    </form>
  );
};

export default Login;
