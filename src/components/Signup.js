import React, { useState } from 'react';

function Signup() {
  const [userData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    username:"",
  });
  const handleChange = (e) => {
    setFormData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return <div>
  <h2>Signup Form</h2>
  <form onSubmit={handleSubmit}>
  <fieldset>
        <legend>Personal Information</legend>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={userData.name}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={userData.age}
        onChange={handleChange}
      />
    </div>
    </fieldset>
    <fieldset>
        <legend>Account Information</legend>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    <button type="submit">Submit</button>
  </form>
</div>;
}

export default Signup;  
