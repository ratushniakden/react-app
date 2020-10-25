import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './SignInFormik.module.css';

const validationScheme = Yup.object({
  login: Yup.string().trim().min(8).max(32).required('This is required field'),
  password: Yup.string()
    // gr3at@3wdsG
    .trim()
    .matches(
      /^(?![\s])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm,
      'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
    )
    .required('This is required field'),
});

const SignInFormik = (props) => {
  const initialValues = {
    login: '',
    password: '',
  };

  const submitHandler = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <>
      <div>
        <img
          className={styles.logoImage}
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="logoImage"
        />
        <h1>Sign in to GitHub</h1>
      </div>
      <Formik
        onSubmit={submitHandler}
        initialValues={initialValues}
        validationSchema={validationScheme}
      >
        {(formikProps) => {
          return (
            <Form className={styles.mainForm}>
              <label>
                {' '}
                Username or email address
                <Field
                  className={styles.inputField}
                  name="login"
                  type="text"
                />{' '}
              </label>
              <ErrorMessage
                className={styles.errorMessage}
                name="login"
                component="span"
              />
              <label>
                {' '}
                <span className={styles.passwordInfo}>
                  <p>Password</p>
                  <p className={styles.forgotPassword}>Forgot password?</p>{' '}
                </span>
                <Field
                  className={styles.inputField}
                  name="password"
                  type="password"
                />
              </label>
              <ErrorMessage
                className={styles.errorMessage}
                name="password"
                component="span"
              />
              <input className={styles.signInButton} type="submit" value="Sign in" />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
SignInFormik.propTypes = {};

export default SignInFormik;
