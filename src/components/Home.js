import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/styles.css"
import logo from '../logo1.png';
import { useNavigate  } from 'react-router-dom';
function Home() {
  const navigate  = useNavigate ();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  async function checkLoginData() {
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
      });
      const json = await res.json();
      return json;
    } catch (e) {
      console.log(e);
      return { status: 'fail', message: 'Oops something went wrong' };
    }
  }
  async function handleLogin(event) {
    event.preventDefault();
    const result = await checkLoginData();
    if (result.status === 'success') {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  }
  return (
<div className="container">
      <div className="col">
        <div className="col-md-6 ">
          <h1>Welcome to Book worms!</h1>
          <text>Sign up or log in to get started.</text>
          <img src={logo} alt="" className="sized-image" />
        </div>
        <div className="col-md-6 ">
          <div className="card">
            <div className="card-header">
              <h5>Sign In</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
              <hr />
              <Link to="/signup">Don't have an account? Sign up now!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Home;
