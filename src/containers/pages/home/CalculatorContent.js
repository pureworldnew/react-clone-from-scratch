import React, { useState } from 'react';

const CalculatorContnet = () => {
  const [shape, setShape] = useState('');
  const shapeInput = () => {
    switch (shape) {
      case 'cube':
        return (
          <div id="step3_cube">
            <label className="control-label">Length</label>{' '}
            <input
              name="c_length"
              type="text"
              className="form-control"
              id="c_length"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="c_length_err"></div>
            <br clear="all" />
            <label className="control-label">Width</label>{' '}
            <input
              name="c_width"
              type="text"
              className="form-control"
              id="c_width"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="c_width_err"></div>
            <br clear="all" />
            <label className="control-label">Depth</label>{' '}
            <input
              name="c_depth"
              type="text"
              className="form-control"
              id="c_depth"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="c_depth_err"></div>
            <br clear="all" />
          </div>
        );
        break;
      case 'cube_p':
        return (
          <div id="step3_cube_p">
            <label className="control-label">Length</label>{' '}
            <input
              name="p_length"
              type="text"
              className="form-control"
              id="p_length"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="p_length_err"></div>
            <br clear="all" />
            <label className="control-label">Width</label>{' '}
            <input
              name="p_width"
              type="text"
              className="form-control"
              id="p_width"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="p_width_err"></div>
            <br clear="all" />
            <label className="control-label">Shallow Depth</label>{' '}
            <input
              name="p_sdepth"
              type="text"
              className="form-control"
              id="p_sdepth"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="p_sdepth_err"></div>
            <br clear="all" />
            <label className="control-label">Deep Depth</label>{' '}
            <input
              name="p_ddepth"
              type="text"
              className="form-control"
              id="p_ddepth"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="p_ddepth_err"></div>
          </div>
        );
        break;
      case 'cone':
        return (
          <div id="step3_cone">
            <label className="control-label">Diameter</label>{' '}
            <input
              name="o_diameter"
              type="text"
              className="form-control"
              id="o_diameter"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="o_diameter_err"></div>
            <br clear="all" />
            <label className="control-label">Depth</label>{' '}
            <input
              name="o_depth"
              type="text"
              className="form-control"
              id="o_depth"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="o_depth_err"></div>
          </div>
        );
        break;
      case 'cylinder':
        return (
          <div id="step3_cylinder">
            <label className="control-label">Diameter</label>{' '}
            <input
              name="y_diameter"
              type="text"
              className="form-control"
              id="y_diameter"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="y_diameter_err"></div>
            <br clear="all" />
            <label className="control-label">Depth</label>{' '}
            <input
              name="y_depth"
              type="text"
              className="form-control"
              id="y_depth"
              value=""
              maxLength="10"
            />
            <div className="cal_err" id="y_depth_err"></div>
          </div>
        );
        break;
      default:
        break;
    }
  };
  const visible = (param) => {
    switch (param) {
      case 'cube':
        setShape('cube');
        break;
      case 'cube_p':
        setShape('cube_p');
        break;
      case 'cone':
        setShape('cone');
        break;
      case 'cylinder':
        setShape('cylinder');
        break;
      default:
        break;
    }
    // if(shape == '')
  };
  return (
    <section className="calculator-content-section mt-40 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="dirt_heading">
              <h2>Fill Calculator</h2>
            </div>
            <p>
              We hope to provide you with the best online clean fill calculator,
              as well as all relevant information regarding clean fill dirt near
              you, If you don't know how to calculate how much clean fill dirt
              you need or have, Use our fill dirt calculator. Our fill
              calculator can help you figure out how much fill dirt you will
              need for your construction project. This cubic yard calculator
              works with top soil, mulch, gravel, dirt fill, clean fill, fill
              dirt.
            </p>
            <p>
              <span className="second-parag">
                This calculator is designed to give an approximate volume
                quantity for fill, gravel, rock or mulch to fill or cover a
                given area, either generally rectangular or generally round.
                (You must estimate if the area is oblong.) Enter the width,
                length, and thickness (how deep you want the cover) of your
                rectangular area, or enter the diameter and depth (of the cover)
                of your circular area, click on whether you are measuring each
                designation in feet or inches (they do not all have to be the
                same), then click Calculate. The calculator will estimate the
                number of cubic inches, feet, yards and tons of material
                required, as well as the estimated cost if you entered the cost
                value of a cubic yard or ton of cover material.{' '}
              </span>
            </p>

            <form className="form-horizontal">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="shadow_custom">
                      <h2 className="custom_headein_h2">Volume Calculators</h2>

                      <h4>Step 1: Select Shape</h4>

                      <label className="control-label">
                        <input
                          name="shape"
                          type="radio"
                          value="cube"
                          onClick={() => visible('cube')}
                        />{' '}
                        Cube
                      </label>
                      <br clear="all" />
                      <label className="control-label">
                        <input
                          name="shape"
                          type="radio"
                          value="cube_p"
                          onClick={() => visible('cube_p')}
                        />{' '}
                        Cube (Pool Shaped)
                      </label>
                      <br clear="all" />
                      <label className="control-label">
                        <input
                          name="shape"
                          type="radio"
                          value="cone"
                          onClick={() => visible('cone')}
                        />{' '}
                        Cone
                      </label>
                      <br clear="all" />
                      <label className="control-label">
                        <input
                          name="shape"
                          type="radio"
                          value="cylinder"
                          onClick={() => visible('cylinder')}
                        />{' '}
                        Cylinder
                      </label>
                      <br clear="all" />
                      <br />
                      <h4>Step 2: Select Measurement System</h4>

                      <select
                        name="measurement"
                        id="measurement"
                        className="form-control"
                      >
                        <option value="metres">Metres</option>
                        <option value="feet">Feet</option>
                        <option value="yards">Yards</option>
                      </select>
                      <br clear="all" />
                      <br />
                      <h4>Step 3: Enter Dimensions</h4>
                      {shapeInput()}

                      <p>&nbsp;</p>

                      <p>
                        <input
                          name="calculate"
                          type="button"
                          id="calculate"
                          value="Calculate"
                          className="btn btn-lg btn-success mr-1"
                          onClick="calculate_volume(xajax.getFormValues('rform'))"
                        />
                        <input
                          name="v_reset"
                          type="button"
                          id="convert"
                          value="« RESET"
                          className="btn btn-lg btn-danger"
                          onClick="reset_volume()"
                        />
                      </p>

                      <p id="v_result"></p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="shadow_custom">
                      <h2 className="custom_headein_h2">Unit Convertors</h2>

                      <h4>Step 1: Select current units</h4>

                      <select
                        name="c_units"
                        id="c_units"
                        className="form-control"
                      >
                        <option value="metres">Cubic Metres</option>
                        <option value="feet">Cubic Feet</option>
                        <option value="yards">Cubic Yards</option>
                      </select>
                      <br clear="all" />
                      <br />
                      <h4>Step 2: Select new units</h4>

                      <select
                        name="n_units"
                        id="n_units"
                        className="form-control"
                      >
                        <option value="metres">Cubic Metres</option>
                        <option value="feet">Cubic Feet</option>
                        <option value="yards">Cubic Yards</option>
                      </select>
                      <br clear="all" />
                      <br />
                      <h4>Step 3: Enter value to convert</h4>

                      <input
                        name="value"
                        type="text"
                        className="form-control"
                        id="value"
                        value=""
                        maxLength="10"
                      />
                      <div className="cal_err" id="value_err"></div>
                      <br clear="all" />

                      <p>
                        <input
                          name="convert"
                          type="button"
                          id="convert"
                          value="Convert"
                          className="btn btn-lg btn-success mr-1"
                          onClick="convert_value(xajax.getFormValues('rform'))"
                        />
                        <input
                          name="u_reset"
                          type="button"
                          id="convert"
                          value="« RESET"
                          className="btn btn-lg btn-danger"
                          onClick="reset_convert()"
                        />
                      </p>

                      <br clear="all" />
                      <p id="u_result"></p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorContnet;
