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
import { setStep, setStep3Item } from '../../redux/actions';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const Step3 = ({
  step,
  loading,
  error,
  step3Item,
  setStepAction,
  setStep3ItemAction,
}) => {
  console.log('step3Item value is here', step3Item);
  const [inputFocus, setInputFocus] = useState(false);

  const onCompleteStep3 = (values) => {
    console.log('step3Item is here', step3Item);
    if (step3Item !== '') {
      setStepAction(4);
    }
  };

  const onClickItem = (item) => {
    console.log('onClickItem', item);
    setStep3ItemAction(item.substring(11));
  };

  const onBlurItem = () => {
    // setStep3ItemAction('');
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto">
        <Card className="signup-step3-card">
          <CardTitle className="mb-0 signup-step2-title">
            <div className="signup-step3-title">
              <IntlMessages
                id="user.step3-title"
                className="signup-step3-title"
              />
            </div>
            <div className="signup-step3-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              dapibus cursus sagittis placerat morbi amet.
            </div>
          </CardTitle>

          <Formik>
            {({ errors, touched }) => (
              <Form className="av-tooltip tooltip-label-bottom">
                <FormGroup className="form-group has-float-label">
                  <div className="d-flex flex-row justify-content-center small-card-wrapper">
                    <div
                      tabindex="1"
                      className="small-card pc"
                      onClick={(e) => onClickItem(e.target.className)}
                      onBlur={onBlurItem}
                    >
                      <img src="/assets/logos/system-pc.svg" alt="" />
                      <div>PC</div>
                    </div>
                    <div
                      tabindex="2"
                      className="small-card playstation"
                      onClick={(e) => onClickItem(e.target.className)}
                      onBlur={onBlurItem}
                    >
                      <img src="/assets/logos/system-ps.svg" alt="" />
                      <div>PLAYSTATION</div>
                    </div>
                    <div
                      tabindex="3"
                      className="small-card xbox"
                      onClick={(e) => onClickItem(e.target.className)}
                      onBlur={onBlurItem}
                    >
                      <img src="/assets/logos/system-ps.svg" alt="" />
                      <div>XBOX</div>
                    </div>
                  </div>
                </FormGroup>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    className={`default-btn-next ${
                      step3Item !== '' ? 'selected-item-next' : ''
                    }`}
                    onClick={onCompleteStep3}
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
  const { user, loading, step, step3Item } = authUser;
  return { user, loading, step, step3Item };
};

export default connect(mapStateToProps, {
  setStepAction: setStep,
  setStep3ItemAction: setStep3Item,
})(Step3);
