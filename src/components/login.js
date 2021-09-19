import axios from 'axios';
import { Redirect, useHistory, withRouter } from 'react-router-dom';

const Login = (props) => {
  const {
    email,
    password,
    changePassword,
    changeEmail,
    loggedInStatus,
    setLoggedInStatus,
  } = props;

  const url = 'https://customer-care-platform.herokuapp.com/users/login';
  const history = useHistory();
  const userLoginData = { email, password };

  

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(url, userLoginData)
      .then((response) => {
        if (response.data.message === 'You have logged in successfully') {
          handleSuccessResponse(response.data);
          setLoggedInStatus('Logged In');
        }
      })
      .catch((error) => console.log('error => ', error));
  };

  const handleSuccessResponse = (data) => {
    history.push('/dashboard');
  };

  return (
    <div className="form-div">
      <section>
        <form onSubmit={handleLogin}>
          <p>Logged-In Status {loggedInStatus}</p>
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            onChange={changeEmail}
            value={email}
            className="form-control form-group"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={changePassword}
            value={password}
            className="form-control form-group"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-danger btn-block"
          />
        </form>
      </section>
    </div>
  );
};

export default withRouter(Login);
