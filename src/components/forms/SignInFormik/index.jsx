import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import styles from './SignInFormik.module.css';

const validationScheme = Yup.object({
  login: Yup.string()
    .trim()
    .matches(
      /^[a-z0-9_-]{3,15}$/gm,
      'length of 3 to 16 characters, no space allowed'
    )
    .required('This is required field'),
  password: Yup.string()
    // gr3at@3wdsG
    .matches(
      /^([^\s])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}([^\s])$/gm,
      'minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
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
      Home
      <Link to="/">To Home</Link>
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
        {({ errors, touched }) => {
          return (
            <Form className={styles.mainForm}>
              <label>
                Username or email address
                <Field className={styles.inputField} name="login" type="text" />
              </label>
              <div className={styles.popUpError}>
                <ErrorMessage
                  className={styles.errorMessage}
                  name="login"
                  component="span"
                />
              </div>
              <label>
                <span className={styles.passwordInfo}>
                  <p>Password</p>
                  <p>
                    {' '}
                    <a className={styles.forgotPassword} href="#">
                      {' '}
                      Forgot password?
                    </a>
                  </p>{' '}
                </span>
                <Field
                  className={styles.inputField}
                  name="password"
                  type="password"
                />
              </label>
              <div className={styles.popUpError}>
                <ErrorMessage
                  className={styles.errorMessage}
                  name="password"
                  component="span"
                />
              </div>

              <input
                className={styles.signInButton}
                type="submit"
                value="Sign in"
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
SignInFormik.propTypes = {};

export default SignInFormik;
