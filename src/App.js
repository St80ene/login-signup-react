import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import './App.css';
import Hero from './components/hero';
import Dashboard from './components/Dashboard';

const App = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [loggedInStatus, setLoggedInStatus] = useState('Not_LOGGED_IN');
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    sex: '',
    age: '',
  });
  // const [isAdmin, setIsAdmin] = useState(false);

  

  const changeFullName = (event) => {
    return setFullname(event.target.value);
  };

  const changeEmail = (event) => {
    return setEmail(event.target.value);
  };

  const changePhone = (event) => {
    return setPhone(event.target.value);
  };

  const changePassword = (event) => {
    return setPassword(event.target.value);
  };

  const changeSex = (event) => {
    return setSex(event.target.value);
  };

  const changeAge = (event) => {
    return setAge(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={'/'}
              render={(props) => (
                <Hero
                  {...props}
                  loggedInStatus={loggedInStatus}
                  fullname={fullname}
                  email={email}
                  phone={phone}
                  password={password}
                  sex={sex}
                  changeSex={changeSex}
                  changePassword={changePassword}
                  changeEmail={changeEmail}
                  changePhone={changePhone}
                  // handleSubmit={handleSubmit}
                  changeAge={changeAge}
                  age={age}
                  changeFullName={changeFullName}
                  // handleSuccessResponse={handleSuccessResponse}
                  setFullname={setFullname}
                  setEmail={setEmail}
                  setAge={setAge}
                  setPassword={setPassword}
                  setPhone={setPhone}
                  setSex={setSex}
                  setLoggedInStatus={setLoggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={'/dashboard'}
              render={(props) => (
                <Dashboard
                  {...props}
                  loggedInStatus={loggedInStatus}
                  setLoggedInStatus={setLoggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={'/login'}
              render={(props) => (
                <Login
                  {...props}
                  loggedInStatus={loggedInStatus}
                  setLoggedInStatus={setLoggedInStatus}
                  changePassword={changePassword}
                  changeEmail={changeEmail}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  password={password}
                  email={email}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
