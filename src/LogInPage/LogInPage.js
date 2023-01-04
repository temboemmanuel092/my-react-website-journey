import React from 'react';

export default function LogInPage() {
  return (
    <div>
      <h1 className="page-title">Sign up</h1>
      <form action="/signup" method="post" className="sign-up"></form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <input type="submit" value="Submit" />
      <h1>Log In</h1>
      <form action="/login" method="post" className="log-in" />
      <label for="username">Username:</label>
      <br />
      <input type="text" id="username" name="username" />
      <br />
      <label for="password">Password:</label>
      <br />
      <input type="password" id="password" name="password" />
      <br />
      <input type="checkbox" name="remember" id="remember" />
      <label for="remember">Remember me</label> <br />
      <input type="submit" value="Submit" />
      <form />
    </div>
  );
}
