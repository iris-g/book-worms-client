import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/styles.css"
import logo from '../logo1.png';
import { useNavigate  } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FaUser, FaLock } from 'react-icons/fa';
function Home() {
  const navigate  = useNavigate ();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setError] = useState('');

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
    console.log(result)
    if (result.status === 'success') {
      navigate('/dashboard');
    } else {
      setError(result.status);

    }
  }
  //Join our social network for book lovers and let AI do the heavy lifting. Discover your new favorite book based on your interests and connect with others who share your passion.
  return (
    
<div className="container">
  <div className="rowC">
    <div className="col-md-10">
      <div class="form-left">
        <div className="card">
          <div className="card-header">
            <h1>Welcome to Book worms!</h1>
          </div>
        <form> 
          <h4>Join our social network for book lovers and let AI do the heavy lifting. Discover your new favorite book based on your interests and connect with others who share your passion.</h4>
          <h5>Sign up or log in to get started.</h5>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i><FaUser /></span>
            <input id="email" type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i> <FaLock /></span>
            <input id="password" type="password" className={hasError ? 'input-error' : "form-control"} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" />
          </div>
          <div className="input-group">
          </div>
        </form>
        
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {hasError && <div className="alert alert-danger mt-3">{hasError}</div>}
          <Link to="/signup">Don't have an account? Sign up now!</Link>
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <img src={logo} alt="" className="image-container" style={{ maxWidth: '45%' }}/>
    </div>
  </div>
</div>





  );
}

export default Home;
