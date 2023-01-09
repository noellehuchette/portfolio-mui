import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Send, MarkEmailRead } from '@mui/icons-material';

const initValues = {
  fullName: '',
  email: '',
  message: '',
  submitted: false
};

const SERVICE_ID = 'service_41naj17';
const TEMPLATE_ID = 'template_aw18c2p';
const PUBLIC_KEY = 'O-CRnv_9o3LdwIf7n';

const Contact = () => {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let tmp = { ...errors };

    if ('fullName' in fieldValues) {
      tmp.fullName = fieldValues.fullName ? '' : 'This field is required';
    }

    if ('email' in fieldValues) {
      tmp.email = fieldValues.email ? '' : 'This field is required';
      if (fieldValues.email) {
        tmp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ''
          : 'Please enter a valid email address';
      }
    }

    if ('message' in fieldValues) {
      tmp.message = fieldValues.message ? '' : 'This field is required';
    }

    setErrors({ ...tmp });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    validate({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    if (formIsValid()) {
      try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
        setValues({ ...initValues, submitted: true });
        setErrors({});
      } catch (err) {
        window.alert('something went wrong!');
        console.log(err);
      }
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setValues(initValues);
    setErrors({});
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((err) => err === '');
    return isValid;
  };

  return (
    <form
      style={{
        margin: '1rem'
      }}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5
        }}
      >
        <Typography variant="h5">Contact Me</Typography>
        <TextField
          name="fullName"
          label="Full Name"
          value={values.fullName}
          onBlur={handleInput}
          onChange={handleInput}
          autoComplete="none"
          fullWidth
          disabled={values.submitted}
          {...(errors['fullName'] && {
            error: true,
            helperText: errors['fullName']
          })}
        />
        <TextField
          name="email"
          label="Email"
          value={values.email}
          onBlur={handleInput}
          onChange={handleInput}
          autoComplete="none"
          disabled={values.submitted}
          fullWidth
          {...(errors['email'] && {
            error: true,
            helperText: errors['email']
          })}
        />
        <TextField
          name="message"
          label="Message"
          value={values.message}
          onBlur={handleInput}
          onChange={handleInput}
          autoComplete="none"
          disabled={values.submitted}
          fullWidth
          multiline
          rows={8}
          {...(errors['message'] && {
            error: true,
            helperText: errors['message']
          })}
        />
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            disabled={!formIsValid() || values.submitted}
            sx={{ alignSelf: 'flex-end', gap: 1 }}
          >
            Submit
            {values.submitted ? <MarkEmailRead /> : <Send />}
          </Button>
          <Button
            color="secondary"
            variant="contained"
            type="reset"
            sx={{ alignSelf: 'flex-start' }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Contact;
