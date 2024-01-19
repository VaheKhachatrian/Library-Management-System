// import React from 'react';
// import Box from '@mui/material/Box';
// import { TextField, Typography } from '@mui/material';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';

// function RegisterForm() {
//   return (
//     <div className="login">
//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 2.5, width: '25ch' },
//           border: '3px dashed grey',
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <Typography textAlign="center" variant="h4" gutterBottom>
//           Sign Up
//         </Typography>
//         <Typography textAlign="center" variant="subtitle1" gutterBottom>
//           It&apos;s free and only takes a minute
//         </Typography>
//         <div>
//           <TextField
//             First
//             Name
//             label="First Name"
//           />
//         </div>
//         <div>
//           <TextField
//             Last
//             Name
//             label="Last Name"
//           />
//         </div>
//         <div>
//           <TextField
//             Email
//             label="Email"
//           />
//         </div>
//         <div>
//           <TextField
//             Password
//             label="Password"
//           />
//         </div>
//         <div>
//           <TextField
//             Confirm
//             Password
//             label="Confirm Password"
//           />
//         </div>
//         <Link to="/e-commerce/" className="link">
//           <div className="login"><Button variant="outlined">Register</Button></div>
//         </Link>
//         <div className="login">
//           <Typography textAlign="center" variant="subtitle1" gutterBottom>
//             Already have an Account?
//             {' '}
//             <Link to="/login" className="link">Login here  </Link>
//           </Typography>
//         </div>
//       </Box>
//     </div>
//   );
// }

// export default RegisterForm;
import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'USER',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/Register', formData);
      console.log(response.data);

      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <input
              className="form-field"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder=" Username"
              required
            />
          </div>

          <div className="input-container">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <input
              className="form-field"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" Email Address"
              required
            />
          </div>
          <div className="input-container">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <input
              className="form-field"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=" Password"
              required
            />
          </div>
          <button className="submit-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default Registration;
