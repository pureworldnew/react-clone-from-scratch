/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
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
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import {
  registerUserWithInfo,
  setStep,
  setStep7Item,
} from '../../redux/actions';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const Step7 = ({
  history,
  step,
  loading,
  error,
  step7Item,
  setStepAction,
  setStep7ItemAction,
  registerUserAction,
}) => {
  const onCompleteStep7 = (values) => {
    console.log('step7Item is here', step7Item);
    registerUserAction(values, history);
  };

  const onClickItem = (item) => {
    console.log('onClickItem', item);
    setStep7ItemAction(item.substring(11));
  };

  const handleChange = (e) => {
    console.log('onchange ', e.target.value);
  };

  const handleBlur = (e) => {
    console.log('onBlur', e.target.value);
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto">
        <Card className="signup-step7-card">
          <CardTitle className="mb-0 signup-step2-title">
            <div className="signup-step7-title">
              <IntlMessages
                id="user.step7-title"
                className="signup-step7-title"
              />
            </div>
            <div className="signup-step7-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              dapibus cursus sagittis placerat morbi amet.
            </div>
          </CardTitle>

          <Formik>
            {({ errors, touched }) => (
              <Form className="av-tooltip tooltip-label-bottom">
                <div className="d-flex justify-content-between align-items-center mb-17">
                  <Button className="battle-dot-net" onClick={onCompleteStep7}>
                    <div>
                      <span className="signin-with-battle-icon">
                        <img src="/assets/logos/signin-with-battle1.svg" alt />
                      </span>
                      <span className="label">
                        <IntlMessages id="user.battle-dot-net" />
                      </span>
                    </div>
                    <div>
                      <span>
                        <img src="/assets/logos/battle-dot-net.svg" alt />
                      </span>
                    </div>
                  </Button>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-17">
                  <Button className="proceed-to-dash" onClick={onCompleteStep7}>
                    <span className="label">
                      <IntlMessages id="user.proceed-to-dash" />
                    </span>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card>
      </Colxx>
    </Row>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { user, loading, step, step7Item } = authUser;
  return { user, loading, step, step7Item };
};

export default connect(mapStateToProps, {
  registerUserAction: registerUserWithInfo,
  setStepAction: setStep,
  setStep7ItemAction: setStep7Item,
})(Step7);
