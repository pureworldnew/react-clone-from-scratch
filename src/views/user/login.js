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
  // const [email] = useState('demo@gogo.com');
  const [email] = useState('');
  const [password] = useState('gogo123');
  const [inputFocus, setInputFocus] = useState(false);
  const [status, setStatus] = useState('proceed');

  useEffect(() => {
    if (error) {
      alert('errror');
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

  return <Row className="h-100">login</Row>;
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
