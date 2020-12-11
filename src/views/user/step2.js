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
import { setStep } from '../../redux/actions';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const Step2 = ({ step, loading, error, setStepAction }) => {
  const [inputFocus, setInputFocus] = useState(false);

  const onCompleteStep2 = () => {
    console.log('complete form');
    setStepAction(3);
  };

  const onSelectFlag = (country) => {
    console.log('onselectflag', country);
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto">
        <Card className="signup-step2-card">
          <CardTitle className="mb-0 signup-step2-title">
            <IntlMessages id="user.step2-title" />
            <div>
              <p className="signup-step2-description">
                Tell us where you play so we can match you with players near
                you.
              </p>
            </div>
          </CardTitle>

          <Formik>
            {({ errors, touched }) => (
              <Form className="av-tooltip tooltip-label-bottom">
                <FormGroup className="form-group has-float-label">
                  <div>
                    <ReactFlagsSelect
                      defaultCountry="AU"
                      className="country-select"
                      searchable={true}
                      selectedSize={18}
                      optionsSize={18}
                      onSelect={(e) => onSelectFlag(e)}
                    />
                  </div>
                </FormGroup>

                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    className="next-step-btn proceed-shadow"
                    onClick={onCompleteStep2}
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
  const { user, loading, step } = authUser;
  return { user, loading, step };
};

export default connect(mapStateToProps, {
  setStepAction: setStep,
})(Step2);
