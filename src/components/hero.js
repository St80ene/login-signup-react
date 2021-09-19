import React from 'react'
import Register from './register'

export default function Hero(props) {
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
    handleSubmit,
    changeAge,
    age,
    changeFullName,
    loggedInStatus,
    setSex,
    setPhone,
    setPassword,
    setEmail,
    setAge,
    setFullname,
    setLoggedInStatus,
  } = props;
  
  return (
    <div>
      <p>Hero page</p>
      <p>Status: {loggedInStatus}</p>
      <Register
        fullname={fullname}
        email={email}
        phone={phone}
        password={password}
        sex={sex}
        changeSex={changeSex}
        changePassword={changePassword}
        changeEmail={changeEmail}
        changePhone={changePhone}
        handleSubmit={handleSubmit}
        changeAge={changeAge}
        age={age}
        changeFullName={changeFullName}
        setFullname={setFullname}
        setEmail={setEmail}
        setAge={setAge}
        setPassword={setPassword}
        setPhone={setPhone}
        setSex={setSex}
        setLoggedInStatus={setLoggedInStatus}
      />
    </div>
  );
}
