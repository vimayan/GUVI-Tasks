import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Inputs(props) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('')
  return (
    <Box
      component="form"
      onSubmit={(e)=>{e.preventDefault();props.handleSubmit(name,email)}}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  type='text'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
        <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {props.button}
                </Button>
    </Box>
  );
}