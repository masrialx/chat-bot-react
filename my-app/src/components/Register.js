import React from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h3 className="text-center">Sign Up</h3>
            <form>
              <div className="mb-3">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" />
              </div>
              <button type="submit" className="btn btn-success w-100">Sign Up</button>
            </form>
            <div className="text-center mt-3">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
