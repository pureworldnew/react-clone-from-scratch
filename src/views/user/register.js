/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { connect } from 'react-redux';
import { setStep } from '../../redux/actions';

const Register = ({ history, registerUserAction, loading, step }) => {
  console.log('step value is here', step);
  // return step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <></>;
  switch (step) {
    default:
      return <div />;
  }
};
const mapStateToProps = ({ authUser }) => {
  const { user, loading, step } = authUser;
  return { user, loading, step };
};

export default connect(mapStateToProps, {
  setStepAction: setStep,
})(Register);
