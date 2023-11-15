import { useState } from 'react';

import { Button } from '@mui/material';

export default function SignUp() {

  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '')
    {
      setError(true);
    }
    else
    {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        style={{
        display: submitted ? '' : 'none',}}
      >
        <h1>
          User {name} successfully registered!!
        </h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div style={{display: error ? '' : 'none',}}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">

      <h1>User Registration</h1>

      {/* Calling to the methods */}
      <div>
        {errorMessage()}
        {successMessage()}
      </div>

      <form>

        {/* Labels and inputs for form data */}
        <label className="label">Name: &nbsp;</label>
        <input onChange={handleName} value={name} type="text" />

        <br />
        <br />

        <label className="label">Email: &nbsp;</label>
        <input onChange={handleEmail} value={email} type="email" />

        <br />
        <br />

        <label className="label">Password: &nbsp;</label>
        <input onChange={handlePassword} value={password} type="password" />

        <br />
        <br />

        <Button variant="contained" onClick={handleSubmit} type="submit">
          Submit
        </Button>

      </form>
    </div>
  );
}
