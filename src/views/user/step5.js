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
import { setStep, setStep5Item } from '../../redux/actions';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const Step5 = ({
  step,
  loading,
  error,
  step5Item,
  setStepAction,
  setStep5ItemAction,
}) => {
  console.log('step5Item value is here', step5Item);
  const [inputFocus, setInputFocus] = useState(false);

  const onCompleteStep5 = (values) => {
    console.log('step5Item is here', step5Item);
    if (step5Item !== '') {
      setStepAction(6);
    }
  };

  const onClickItem = (item) => {
    console.log('onClickItem', item);
    setStep5ItemAction(item.substring(11));
  };

  const handleChange = (e) => {
    console.log('onchange ', e.target.value);
    setStep5ItemAction(e.target.value);
  };

  const handleBlur = (e) => {
    console.log('onBlur', e.target.value);
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto">
        <Card className="signup-step5-card">
          <CardTitle className="mb-0 signup-step2-title">
            <div className="signup-step5-title">
              <IntlMessages
                id="user.step5-title"
                className="signup-step5-title"
              />
            </div>
            <div className="signup-step5-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              dapibus cursus sagittis placerat morbi amet.
            </div>
          </CardTitle>

          <Formik>
            {({ errors, touched }) => (
              <Form className="av-tooltip tooltip-label-bottom">
                <FormGroup className="form-group has-float-label">
                  <select
                    name="color"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="weapon-btn"
                  >
                    <option value="" label="Choose your favourite weapon" />
                    <option value="red" label="red" />
                    <option value="blue" label="blue" />
                    <option value="green" label="green" />
                  </select>
                  {errors.color && touched.color && (
                    <div className="input-feedback">{errors.color}</div>
                  )}
                </FormGroup>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    className={`default-btn-next ${
                      step5Item !== '' ? 'selected-item-next' : ''
                    }`}
                    onClick={onCompleteStep5}
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
  const { user, loading, step, step5Item } = authUser;
  return { user, loading, step, step5Item };
};

export default connect(mapStateToProps, {
  setStepAction: setStep,
  setStep5ItemAction: setStep5Item,
})(Step5);
