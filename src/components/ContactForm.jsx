import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  message: Yup.string().required('Required'),
});

export default function ContactForm() {
  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert('Form Submitted!');
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="email"
            as={TextField}
            label="Email"
            variant="outlined"
            fullWidth
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            sx={{ mb: 2 }}
          />
          <Field
            name="message"
            as={TextField}
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            error={touched.message && Boolean(errors.message)}
            helperText={touched.message && errors.message}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
