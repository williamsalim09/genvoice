import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import the Navbar component

const Settings = ({ onLogout }) => {
  // update password states
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  // State for new password visibility
  const [showNewPassword, setShowNewPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const navigate = useNavigate(); 

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setStatusMessage("Passwords don't match!");
      return;
    }

    // mock api patch to update password
    try {
      const response = await fetch('/api/users/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage(data.message);
        console.log('Updated Password:', newPassword);
      } else {
        setStatusMessage(data.message || 'Error updating password');
      }
    } catch (error) {
      setStatusMessage('An error occurred while updating the password.');
    }
  };

  // go home
  const handleGoBack = () => {
    navigate('/homescreen'); 
  };

  // Toggle visibility for new password
  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  //frontend
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Use Navbar here */}
      <Navbar onLogout={onLogout} />

      <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mt-6">
        <h2 className="text-3xl text-black font-bold mb-4">Settings</h2>
        <form onSubmit={handlePasswordChange}>
          {/* input new pass */}
          <div className="mb-4 relative">
            <input
              type={showNewPassword ? 'text' : 'password'}  // Toggle between text and password type for new password
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border rounded p-2 w-full"
            />
            <button
              type="button"
              onClick={toggleShowNewPassword} // Toggle visibility only for the new password
              className="absolute right-2 top-2 text-blue-400"
            >
              {showNewPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* confirm new pass */}
          <div className="mb-4 relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}  // Toggle between text and password type for confirm password
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border rounded p-2 w-full"
            />
            <button
              type="button"
              onClick={toggleShowConfirmPassword} // Toggle visibility only for the confirm password
              className="absolute right-2 top-2 text-blue-400"
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* submit new pass */}
          <button type="submit" className="bg-blue-400 text-white p-2 rounded mb-4">
            Change Password
          </button>
        </form>
        {statusMessage && <p className="mt-4 text-black">{statusMessage}</p>}

        <button
          type="button"
          onClick={handleGoBack}
          className="bg-gray-500 text-white p-2 rounded mt-4"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Settings;
