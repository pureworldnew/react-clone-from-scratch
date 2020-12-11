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
import { setStep, setStep6Item } from '../../redux/actions';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const Step6 = ({
  step,
  loading,
  error,
  step6Item,
  setStepAction,
  setStep6ItemAction,
}) => {
  const onCompleteStep6 = (values) => {
    setStepAction(7);
  };

  const onClickItem = (item) => {
    console.log('onClickItem', item);
    setStep6ItemAction(item.substring(11));
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
        <Card className="signup-step6-card">
          <CardTitle className="mb-0 signup-step2-title">
            <div className="signup-step6-title">
              <IntlMessages
                id="user.step6-title"
                className="signup-step6-title"
              />
            </div>
            <div className="signup-step6-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              dapibus cursus sagittis placerat morbi amet.
            </div>
          </CardTitle>

          <Formik>
            {({ errors, touched }) => (
              <Form className="av-tooltip tooltip-label-bottom">
                <div className="d-flex justify-content-between align-items-center mb-17">
                  <Button
                    className="signin-with-battle"
                    onClick={onCompleteStep6}
                  >
                    <span className="spinner d-inline-block">
                      <span className="bounce1" />
                      <span className="bounce2" />
                      <span className="bounce3" />
                    </span>
                    <span className="signin-with-battle-icon">
                      <img src="/assets/logos/signin-with-battle.svg" alt />
                    </span>
                    <span className="label">
                      <IntlMessages id="user.signin-with-battle" />
                    </span>
                  </Button>
                </div>
                <div onClick={onCompleteStep6} className="ship-this-step">
                  Ship This step
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
  const { user, loading, step, step6Item } = authUser;
  return { user, loading, step, step6Item };
};

export default connect(mapStateToProps, {
  setStepAction: setStep,
  setStep6ItemAction: setStep6Item,
})(Step6);
