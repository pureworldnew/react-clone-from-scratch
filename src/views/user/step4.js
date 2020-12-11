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
import { setStep, setStep4Item } from '../../redux/actions';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const Step4 = ({
  step,
  loading,
  error,
  step4Item,
  setStepAction,
  setStep4ItemAction,
}) => {
  console.log('step4Item value is here', step4Item);
  const [inputFocus, setInputFocus] = useState(false);

  const onCompleteStep4 = (values) => {
    console.log('step4Item is here', step4Item);
    if (step4Item !== '') {
      setStepAction(5);
    }
  };

  const onClickItem = (item) => {
    console.log('onClickItem', item);
    setStep4ItemAction(item.substring(11));
  };

  const onBlurItem = () => {
    // setStep4ItemAction('');
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto">
        <Card className="signup-step4-card">
          <CardTitle className="mb-0 signup-step2-title">
            <div className="signup-step4-title">
              <IntlMessages
                id="user.step4-title"
                className="signup-step4-title"
              />
            </div>
            <div className="signup-step4-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              dapibus cursus sagittis placerat morbi amet.
            </div>
          </CardTitle>

          <Formik>
            {({ errors, touched }) => (
              <Form className="av-tooltip tooltip-label-bottom">
                <FormGroup className="form-group has-float-label">
                  <div className="small-card-wrapper">
                    <div
                      tabindex="1"
                      className="small-card aggressive"
                      onClick={(e) => onClickItem(e.target.className)}
                      onBlur={onBlurItem}
                    >
                      <img src="/assets/logos/system-pc-white.svg" alt="" />
                      <div>AGGRESIVE</div>
                    </div>
                    <div
                      tabindex="2"
                      className="small-card stealth"
                      onClick={(e) => onClickItem(e.target.className)}
                      onBlur={onBlurItem}
                    >
                      <img src="/assets/logos/system-ps.svg" alt="" />
                      <div>STEALTH</div>
                    </div>
                    <div
                      tabindex="3"
                      className="small-card safe"
                      onClick={(e) => onClickItem(e.target.className)}
                      onBlur={onBlurItem}
                    >
                      <img src="/assets/logos/system-pc-white.svg" alt="" />
                      <div>SAFE</div>
                    </div>
                    <div
                      tabindex="4"
                      className="small-card objective"
                      onClick={(e) => onClickItem(e.target.className)}
                      onBlur={onBlurItem}
                    >
                      <img src="/assets/logos/system-ps.svg" alt="" />
                      <div>OBJECTIVE BASED</div>
                    </div>
                  </div>
                </FormGroup>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    className={`default-btn-next ${
                      step4Item !== '' ? 'selected-item-next' : ''
                    }`}
                    onClick={onCompleteStep4}
                  >
                    <span className="spinner d-inline-block">
                      <span className="bounce1" />
                      <span className="bounce2" />
                      <span className="bounce3" />
                    </span>
                    <span className="label">
                      <IntlMessages id="user.register-next" />
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
  const { user, loading, step, step4Item } = authUser;
  return { user, loading, step, step4Item };
};

export default connect(mapStateToProps, {
  setStepAction: setStep,
  setStep4ItemAction: setStep4Item,
})(Step4);
