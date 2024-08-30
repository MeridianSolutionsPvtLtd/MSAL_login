import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import logo from './assets/meridian_logo.png'; // Import the logo image
import MicrosoftAuth from './MicrosoftAuth'; // Import MicrosoftAuth Component

function App() {
  const [isSignUpMode, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      {/* Logo Section */}
      <div className={`logo-container ${isSignUpMode ? "right" : ""}`}>
        <img src={logo} alt="Company Logo" className="company-logo" />
      </div>

      <div className="forms-container">
        <div className="signin-signup">
          {/* Student Register */}
          {!isSignUpMode && (
            <form action="#" className="sign-in-form">
              <h2 className="title">Student Sign In</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Sign In" className="btn solid" />
              
              {/* Microsoft Authentication Button */}
              <MicrosoftAuth />
            </form>
          )}

          {/* Teacher Register */}
          {isSignUpMode && (
            <form action="#" className="sign-up-form">
              <h2 className="title">Teacher Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign Up" />
              
              {/* Microsoft Authentication Button */}
              <MicrosoftAuth />
            </form>
          )}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Teacher?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className="btn transparent teacher-btn" id="sign-up-btn" onClick={handleSignUpClick}>
              Register as Teacher
            </button>
          </div>
          <img src={img1} className="image" alt="Teacher" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Student?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className="btn transparent student-btn" id="sign-in-btn" onClick={handleSignInClick}>
              Sign In as Student
            </button>
          </div>
          <img src={img2} className="image" alt="Student" />
        </div>
      </div>
    </div>
  );
}

export default App;
