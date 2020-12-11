/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import {
  Row,
  Card,
  CardTitle,
  FormGroup,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import { NotificationManager } from '../../components/common/react-notifications';

import { loginUser } from '../../redux/actions';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const Login = ({ history, loading, error, loginUserAction }) => {
  // const [email] = useState('demo@gogo.com');
  const [email] = useState('');
  const [password] = useState('gogo123');
  const [inputFocus, setInputFocus] = useState(false);
  const [status, setStatus] = useState('proceed');

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    }
  }, [error]);

  const onUserLogin = (values) => {
    if (status === 'login') {
      setStatus('done');
    }
    if (status === 'done') {
      if (!loading) {
        if (values.email !== '' && values.password !== '') {
          loginUserAction(values, history);
        }
      }
    }
  };

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  const buttonClick = () => {
    console.log('button click');
    setStatus('login');
  };

  const initialValues = { email, password };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto">
        <Card className="auth-card">
          <CardTitle className="mb-4 login-title">
            <IntlMessages id="user.login-title" />
          </CardTitle>

          <Formik initialValues={initialValues} onSubmit={onUserLogin}>
            {({ errors, touched }) => (
              <Form className="av-tooltip tooltip-label-bottom">
                <FormGroup className="form-group has-float-label">
                  <Field
                    name="email"
                    validate={validateEmail}
                    className="form-control "
                  >
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="email-input-icon">
                              {inputFocus ? (
                                <img
                                  src="/assets/logos/focus-email-icon.svg"
                                  alt=""
                                />
                              ) : (
                                <img
                                  src="/assets/logos/default-email-icon.svg"
                                  alt=""
                                />
                              )}
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Email Address"
                            {...field}
                            className={`email-input ${
                              inputFocus ? 'text-white' : ''
                            }`}
                            autoComplete="none"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                          {errors.email && touched.email && (
                            <div className="invalid-feedback d-block">
                              {errors.email}
                            </div>
                          )}
                        </InputGroup>
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup
                  className={`form-group has-float-label ${
                    status === 'proceed' ? 'd-none' : ''
                  }`}
                >
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                    validate={validatePassword}
                  >
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <div>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="email-input-icon">
                              <img src="/assets/logos/lock-icon.svg" alt="" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                            className={`email-input ${
                              inputFocus ? 'text-white' : ''
                            }`}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                          {errors.password && touched.password && (
                            <div className="invalid-feedback d-block">
                              {errors.password}
                            </div>
                          )}
                        </InputGroup>
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <div className="d-flex justify-content-between align-items-center">
                  <NavLink
                    to="/user/forgot-password"
                    className="forgot-password"
                  >
                    <IntlMessages id="user.forgot-password-question" />
                  </NavLink>
                  {status === 'proceed' ? (
                    <Button
                      className={`proceed-btn ${
                        inputFocus ||
                        (!errors.password && !touched.password && touched)
                          ? 'proceed-shadow'
                          : ''
                      }`}
                      onClick={!touched.email && !errors.email && buttonClick}
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        <IntlMessages id="user.login-proceed" />
                      </span>
                    </Button>
                  ) : (
                    <Button
                      className={`proceed-btn ${
                        inputFocus ? 'proceed-shadow' : ''
                      }`}
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        <IntlMessages id="user.login-button" />
                      </span>
                    </Button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </Card>

        <div className="singup-now-free d-flex justify-content-center">
          <div>Don’t have an account? &nbsp;</div>
          <NavLink to="/user/register" className="singup-now">
            <IntlMessages id="user.signup-now-free" />
          </NavLink>
        </div>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
