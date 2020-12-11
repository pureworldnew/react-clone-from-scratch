/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { connect } from 'react-redux';
import { setStep } from '../../redux/actions';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import Step6 from './step6';
import Step7 from './step7';

const Register = ({ history, registerUserAction, loading, step }) => {
  console.log('step value is here', step);
  // return step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <></>;
  switch (step) {
    case 1:
      return <Step1 />;
      break;
    case 2:
      return <Step2 />;
      break;
    case 3:
      return <Step3 />;
      break;
    case 4:
      return <Step4 />;
      break;
    case 5:
      return <Step5 />;
      break;
    case 6:
      return <Step6 />;
      break;
    case 7:
      return <Step7 history={history}/>;
      break;
    default:
      return <Step2 />;
  }
};
const mapStateToProps = ({ authUser }) => {
  const { user, loading, step } = authUser;
  return { user, loading, step };
};

export default connect(mapStateToProps, {
  setStepAction: setStep,
})(Register);
