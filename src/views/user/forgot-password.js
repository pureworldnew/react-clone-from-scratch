import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import IntlMessages from '../../helpers/IntlMessages';
import { forgotPassword } from '../../redux/actions';
import { NotificationManager } from '../../components/common/react-notifications';

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const ForgotPassword = ({
  history,
  forgotUserMail,
  loading,
  error,
  forgotPasswordAction,
}) => {
  const [email] = useState('demo@coloredstrategies.com');

  const onForgotPassword = (values) => {
    if (!loading) {
      if (values.email !== '') {
        forgotPasswordAction(values, history);
      }
    }
  };

  useEffect(() => {
    if (error) {
      NotificationManager.warning(
        error,
        'Forgot Password Error',
        3000,
        null,
        null,
        ''
      );
    } else if (!loading && forgotUserMail === 'success')
      NotificationManager.success(
        'Please check your email.',
        'Forgot Password Success',
        3000,
        null,
        null,
        ''
      );
  }, [error, forgotUserMail, loading]);

  const initialValues = { email };

  return <Row className="h-100"></Row>;
};

const mapStateToProps = ({ authUser }) => {
  const { forgotUserMail, loading, error } = authUser;
  return { forgotUserMail, loading, error };
};

export default connect(mapStateToProps, {
  forgotPasswordAction: forgotPassword,
})(ForgotPassword);
