import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../signup.jpg";
function Signup() {
  const navigate = useNavigate();
  const [userData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userData);
  // };

  async function signUp() {
    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          age: userData.age,
          name: userData.name,
        }),
      });
      const json = await res.json();
      return json;
    } catch (e) {
      console.log(e);
      return { status: "fail", message: "Oops something went wrong" };
    }
  }
  async function handleSignUp(event) {
    event.preventDefault();
    const result = await signUp();
    console.log(result);
    if (result.status === "success") {
      navigate("/dashboard");
    } else {
    }
  }
  return (
    <div class="App">
      <h2>create a BookWorms account</h2>
      <p class="personal-info">
        In order to provide you with a personalized reading experience, we need
        to get to know you better. Please provide us with your name, email, and
        age. Don't worry, we take your privacy seriously and will never share
        your information with any third parties.
      </p>
      <div class="rowC">
        <div class="signup-input">
          <form onSubmit={handleSignUp}>
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
        </div>
        <div class="image-container">
          <img src={pic} alt="" style={{ maxWidth: "65%" }} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
