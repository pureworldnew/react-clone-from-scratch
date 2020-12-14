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

import { loginUser } from '../../redux/actions';
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
  const [username, setUsername] = useState('test_username');
  const [password] = useState('test_password');

  const onUserLogin = (event) => {
    event.preventDefault();
    const values = ['email_test', 'pass_test'];
    loginUserAction(values, history);
  };

  return (
    <section className="login-content-section mt-40 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="error_ text-left pb-10"></div>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <h4>Use your Clean Fill Network Account</h4>
                <br />

                <form onSubmit={onUserLogin}>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    maxLength="20"
                    placeholder="username"
                    onChange={() => setUsername}
                  />
                  <br clear="all" />
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    maxLength="20"
                    placeholder="passsword"
                  />
                  <br clear="all" />
                  <input
                    name="login2"
                    type="submit"
                    id="login2"
                    value="Login"
                    className="btn btn-lg btn-success"
                  />
                  <br clear="all" />

                  <p>&nbsp;</p>
                  <span className="style3">
                    Not a Member? Please register{' '}
                    <a href="https://www.cleanfill.net/register">here</a>
                    <br />
                    Click{' '}
                    <a href="https://www.cleanfill.net/forgot_password">
                      here
                    </a>{' '}
                    if you have forgotten your password.
                  </span>
                </form>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
