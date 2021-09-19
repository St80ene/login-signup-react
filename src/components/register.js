import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Register(props) {
  const {
    fullname,
    email,
    phone,
    password,
    sex,
    changeSex,
    changePassword,
    changeEmail,
    changePhone,
    changeAge,
    age,
    changeFullName,
    setSex,
    setPhone,
    setPassword,
    setEmail,
    setAge,
    setFullname,
    setLoggedInStatus,
  } = props;

  const url = 'https://customer-care-platform.herokuapp.com/users/signup';

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      fullName: fullname,
      email,
      phone,
      password,
      sex,
      age,
      // isAdmin,
    };
    // You have signed up successfully

    axios
      .post(url, userData)
      .then((response) => {
        if (response.data.status === 200) {
          handleSuccessResponse(response.data);
          setLoggedInStatus('Logged In')
        }
      })
      .catch((error) => console.log('error => ', error));
    setFullname('');
    setEmail('');
    setAge('');
    setPassword('');
    setPhone('');
    setSex('');
    // setIsAdmin(false);
  };

  const handleSuccessResponse = (data) => {
    history.push('/login');
  };

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          onChange={changeFullName}
          value={fullname}
          className="form-control form-group"
        />
        <input
          type="text"
          placeholder="Email"
          onChange={changeEmail}
          value={email}
          className="form-control form-group"
        />
        <input
          type="number"
          placeholder="Phone"
          onChange={changePhone}
          value={phone}
          className="form-control form-group"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={changePassword}
          value={password}
          className="form-control form-group"
        />
        <input
          type="text"
          placeholder="Sex"
          onChange={changeSex}
          value={sex}
          className="form-control form-group"
        />
        <input
          type="text"
          placeholder="Age"
          onChange={changeAge}
          value={age}
          className="form-control form-group"
        />
        {/* <input
              type="text"
              placeholder="Admin"
              onChange={changeIsAdmin}
              value={isAdmin}
              className="form-control form-group"
            /> */}
        <input
          type="submit"
          value="Submit"
          className="btn btn-danger btn-block"
        />
      </form>
    </div>
  );
}
