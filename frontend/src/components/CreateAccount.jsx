import React from 'react';
import './CreateAccount.css';

function CreateAccount() {
    return (
        <div className="main-default-page">
            <div className="overlap-group">
                
                {/* Top Section with Logos and Backgrounds */}
                <div className="rectangle"></div>
                <img src="/totk-logo.png" alt="TOTK Logo" className="TOTK-logo" />
                <img src="/hyrule-track.png" alt="Hyrule Track Image" className="hyrule-track" />
                <img src="/zelda-background.png" alt="Zelda Background Image" className="zelda-background" />

                {/* Account Form Section */}
                <div className="account-form-wrapper">
                    <div className="form-background">
                        <h1 className="header-text">Create an account to get started</h1>
                        
                        {/* Input Fields */}
                        <input type="text" placeholder="Display Name" className="text-input" style={{top: '480px', left: '432px'}} />
                        <input type="email" placeholder="Email" className="text-input" style={{top: '540px', left: '432px'}} />
                        <input type="password" placeholder="Password" className="text-input" style={{top: '600px', left: '432px'}} />
                        
                        {/* Submit Button */}
                        <button className="button">
                            <span className="button-label">Submit</span>
                        </button>
                    </div>
                </div>

                {/* Login Call to Action */}
                <p className="login-cta">
                    Already have an account? <a href="#" className="login-link">Log in HERE</a>
                </p>
            </div>
        </div>
    );
}

export default CreateAccount;

