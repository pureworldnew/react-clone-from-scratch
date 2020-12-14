/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

const Register = ({ history, registerUserAction, loading }) => {
  return '';
};
const mapStateToProps = ({ authUser }) => {
  const { user, loading, step } = authUser;
  return { user, loading, step };
};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
