import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Dashboard(props) {
  const { loggedInStatus, setLoggedInStatus } = props;
  const history = useHistory();
  const handleLogout = () => {
    history.push('/login');
    setLoggedInStatus('Not_LOGGED_IN');
  };
  return (
    <div>
      <p>Welcome to Dashboard</p>
      <p>Status: {loggedInStatus}</p>
      <button type="submit" onClick={handleLogout} >Logout</button>
    </div>
  );
}
