/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { setStep } from '../../redux/actions';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const validateUsername = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your username';
  }
  return error;
};

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};

const validateConfirmPassword = (pass, value) => {
  console.log('value password confirm is here', value);
  let error = '';
  if (!value || value === undefined) {
    console.log('here is inside');
    error = 'Please enter your confirm password';
  }
  if (pass && value) {
    if (pass !== value) {
      error = 'Password not matched';
    }
  }
  return error;
};

const Step1 = ({ step, loading, error, setStepAction }) => {
  const [email] = useState('');
  const [password] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [value, setValue] = useState('');

  const onCompleteStep1 = (values) => {
    console.log('values is here', values);
    if (
      values.email !== '' &&
      values.password !== '' &&
      values.username &&
      values.confirmPassword
    ) {
      console.log('validation passed');
      setStepAction(2);
    }
  };

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  const initialValues = { email, password };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="12" className="mx-auto my-auto">
        <div className="d-flex justify-content-center align-items-center signup-container">
          <div className="right-side d-flex flex-column">
            <Card className="signup-card">
              <div className="form-side">
                <CardTitle className="mb-4 signup-title">
                  <IntlMessages id="user.register" />
                </CardTitle>

                <Formik
                  initialValues={initialValues}
                  onSubmit={onCompleteStep1}
                >
                  {({ errors, touched, values }) => (
                    <Form className="av-tooltip tooltip-label-bottom">
                      <FormGroup className="form-group has-float-label mb-4">
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
                                  onFocus={handleInputFocus}
                                  onBlur={handleInputBlur}
                                />
                                {errors.email && (
                                  <div className="invalid-feedback d-block">
                                    {errors.email}
                                  </div>
                                )}
                              </InputGroup>
                            </div>
                          )}
                        </Field>
                      </FormGroup>

                      <FormGroup className="form-group has-float-label  mb-4">
                        <Field
                          name="username"
                          validate={validateUsername}
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
                                    <img
                                      src="/assets/logos/user-icon.svg"
                                      alt=""
                                    />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  type="text"
                                  placeholder="Username"
                                  {...field}
                                  className={`email-input ${
                                    inputFocus ? 'text-white' : ''
                                  }`}
                                  onFocus={handleInputFocus}
                                  onBlur={handleInputBlur}
                                />
                                {errors.username && touched.username && (
                                  <div className="invalid-feedback d-block">
                                    {errors.username}
                                  </div>
                                )}
                              </InputGroup>
                            </div>
                          )}
                        </Field>
                      </FormGroup>

                      <FormGroup className="form-group has-float-label  mb-4">
                        <Field
                          name="password"
                          type="password"
                          validate={validatePassword}
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
                                    <img
                                      src="/assets/logos/lock-icon.svg"
                                      alt=""
                                    />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  type="password"
                                  name="password"
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

                      <FormGroup className="form-group has-float-label  mb-4">
                        <Field
                          name="confirmPassword"
                          type="password"
                          validate={(value) =>
                            validateConfirmPassword(values.password, value)
                          }
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
                                    <img
                                      src="/assets/logos/lock-icon.svg"
                                      alt=""
                                    />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  type="password"
                                  name="confirmPassword"
                                  placeholder="Password Again"
                                  {...field}
                                  className={`email-input ${
                                    inputFocus ? 'text-white' : ''
                                  }`}
                                  onFocus={handleInputFocus}
                                  onBlur={handleInputBlur}
                                />
                              </InputGroup>
                              {errors.confirmPassword && (
                                <div className="invalid-feedback d-block">
                                  {errors.confirmPassword}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </FormGroup>

                      <FormGroup className="form-group has-float-label  mb-4">
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={value}
                          onChange={setValue}
                          error={
                            value
                              ? isValidPhoneNumber(value)
                                ? undefined
                                : 'Invalid phone number'
                              : 'Phone number required'
                          }
                        />
                        <div
                          class={value !== '' ? 'invalid-feedback d-block' : ''}
                        >
                          {value
                            ? isValidPhoneNumber(value)
                              ? undefined
                              : 'Invalid phone number'
                            : 'Phone number required'}
                        </div>
                      </FormGroup>

                      <div className="d-flex justify-content-center align-items-center">
                        <Button className="proceed-btn proceed-shadow w-100">
                          <IntlMessages id="user.proceed-button" />
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Card>
            <div className="singup-now-free d-flex justify-content-center">
              <div>Already have an account?&nbsp;</div>
              <NavLink to="/user/login" className="singup-now">
                <IntlMessages id="user.signin" />
              </NavLink>
            </div>
          </div>

          <div className="position-relative image-side d-flex flex-column">
            <div className="d-flex justify-content-center">
              <img
                alt=""
                src="/assets/logos/feature1.svg"
                className="image-feature"
              />
              <div className="feature-description">
                <p className="feature">Feature</p>
                <p className="feature-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  mattis scelerisque suspendisse viverra.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <img
                alt=""
                src="/assets/logos/feature2.svg"
                className="image-feature"
              />
              <div className="feature-description">
                <p className="feature">Feature</p>
                <p className="feature-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  mattis scelerisque suspendisse viverra.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <img
                alt=""
                src="/assets/logos/feature3.svg"
                className="image-feature"
              />
              <div className="feature-description">
                <p className="feature">Feature</p>
                <p className="feature-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  mattis scelerisque suspendisse viverra.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <img
                alt=""
                src="/assets/logos/feature4.svg"
                className="image-feature"
              />
              <div className="feature-description">
                <p className="feature">Feature</p>
                <p className="feature-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  mattis scelerisque suspendisse viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Colxx>
    </Row>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { user, loading, step } = authUser;
  return { user, loading, step };
};

export default connect(mapStateToProps, {
  setStepAction: setStep,
})(Step1);
