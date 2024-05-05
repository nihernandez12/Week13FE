import React from 'react';


//This is the login form
function LoginForm() {
    return (
        <div className="login-form">
        <h3 className="login-form-heading">Log In</h3>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username"/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password"/><br></br>
            <button type="submit" class="log-in-button">Log In</button>
        </div>
    </div>
    );
}

export default LoginForm;