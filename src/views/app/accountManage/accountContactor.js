import React, { useState } from 'react';

const AccountContactor = () => {
  const [activebtn, setActiveBtn] = useState(false);

  return (
    <section className="section-content dirt-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="payment_info ">
                <div className="col-sm-10">
                  <h2>
                    <span>Payment Information</span>
                  </h2>

                  <div id="step1" className="">
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      className="form-horizontal"
                    >
                      <h3 className="select_step">Step 1: Membership</h3>
                      <h3>Step 2: Finish</h3>
                      <br clear="all" />

                      <div className="payment_info_data">
                        <input
                          name="amount"
                          type="radio"
                          value="24.99"
                          checked="checked"
                          onChange={() => {}}
                        />{' '}
                        1 post <b>$24.99</b> <br />
                        <br clear="all" />
                        <img
                          src="https://www.cleanfill.net/themes/modern/images/pagos.jpg"
                          className="img"
                          alt=""
                        />
                        <br clear="all" />
                        <input type="hidden" name="cmd" value="_xclick" />
                        <input
                          type="hidden"
                          name="business"
                          value="Paypal@cleanfill.net"
                        />
                        <input
                          type="hidden"
                          name="item_name"
                          value="CleanFILL.net Contactor Membership"
                        />
                        <input
                          type="hidden"
                          name="item_number"
                          id="item_number"
                          value="8.contactor"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input
                          type="hidden"
                          name="button_subtype"
                          value="services"
                        />
                        <input
                          type="hidden"
                          name="return"
                          value="https://www.cleanfill.net/my_account/listings/contactor/finish"
                        />
                        <input
                          type="hidden"
                          name="cancel_return"
                          value="https://www.cleanfill.net/my_account/listings/contactor"
                        />
                        <input
                          type="hidden"
                          name="notify_url"
                          value="https://www.cleanfill.net/ipn_contactor.php"
                        />
                        <input type="hidden" name="rm" value="2" />
                        <p>&nbsp;</p>
                        <input
                          name="pay"
                          type="submit"
                          id="pay"
                          value="SUBMIT"
                          className="btn btn-lg btn-primary"
                        />
                        <br clear="all" />
                      </div>
                    </form>
                  </div>

                  <div id="step2" className="invisible">
                    <h3>Step 1: Membership</h3>
                    <h3 className="select_step">Step 2: Finish</h3>
                    <br clear="all" />

                    <div className="payment_info_data">
                      <div className="error_"></div>
                      <br clear="all" />
                    </div>
                  </div>
                  <br clear="all" />
                </div>
              </div>
              <div className="col-sm-12 new_style">
                <form
                  name="pform"
                  id="pform"
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <div className="right_info invisible">
                    <h3>
                      <img
                        src="https://www.cleanfill.net/themes/modern/icons/a_contactor_maxi.png"
                        alt=""
                      />
                      <a id="add_new" onClick={() => {}}>
                        Add contactor
                        <p>
                          <i>*</i> means mandatory, please fill in the form
                          below and after select the type of fill you have
                        </p>
                      </a>
                    </h3>

                    <div>
                      <span id="error"></span>
                    </div>
                    <br clear="all" />

                    <div id="mod_form" className="">
                      <div className="row">
                        <div className="col-sm-7">
                          <label className="control-label">
                            Business Name <em className="error_">*</em> :
                          </label>
                          <input
                            name="businessname"
                            type="text"
                            className="form-control"
                            id="businessname"
                            value=""
                            maxLength="50"
                            onChange={() => {}}
                          />
                          <br clear="all" />
                          <label className="control-label">Logo :</label>
                          <input
                            name="logo"
                            type="file"
                            className="inp1"
                            id="logo"
                            onChange={() => {}}
                          />
                          <img
                            src="https://www.cleanfill.net/defecto.jpg"
                            width="100"
                            border="0"
                            className="invisible d-none"
                            alt=""
                          />
                          <br clear="all" /> <br clear="all" />
                          <label className="control-label">
                            Contact Name <em className="error_">*</em> :
                          </label>
                          <input
                            name="contactname"
                            type="text"
                            className="form-control"
                            id="contactname"
                            value=""
                            maxLength="100"
                            onChange={() => {}}
                          />
                          <br clear="all" />
                          <label className="control-label">
                            Contact Number <em className="error_">*</em> :
                          </label>
                          <input
                            name="phone"
                            type="text"
                            className="form-control"
                            id="phone"
                            value=""
                            maxLength="20"
                            onChange={() => {}}
                          />
                          <br clear="all" />
                          <label className="control-label">
                            Business Address <em className="error_">*</em>:
                          </label>
                          <input
                            name="businessaddress"
                            type="text"
                            className="form-control"
                            maxLength="100"
                            id="businessaddress"
                            value=""
                            onChange={() => {}}
                          />
                          <br clear="all" />
                          <label className="control-label">
                            Business City/Town :
                          </label>
                          <input
                            name="businesscity"
                            type="text"
                            className="form-control"
                            id="businesscity"
                            value=""
                            maxLength="50"
                            onChange={() => {}}
                          />
                          <br clear="all" />
                          <label className="control-label">
                            Business Province/State :
                          </label>
                          <input
                            name="businesssuburb"
                            type="text"
                            className="form-control"
                            id="businesssuburb"
                            value=""
                            maxLength="50"
                            onChange={() => {}}
                          />
                          <br clear="all" />
                          <label className="control-label">
                            Business Country :
                          </label>
                          <select
                            name="businesscountry"
                            id="businesscountry"
                            className="form-control"
                          >
                            <option value="Canada">&nbsp;&nbsp;Canada</option>
                            <option value="United States">
                              &nbsp;&nbsp;United States
                            </option>
                            <option value="Australia">
                              &nbsp;&nbsp;Australia
                            </option>
                            <option value="New Zealand">
                              &nbsp;&nbsp;New Zealand
                            </option>
                            <option value="United Kingdom">
                              &nbsp;&nbsp;United Kingdom
                            </option>
                            <option value="Norway">&nbsp;&nbsp;Norway</option>
                            <option value="Ireland">&nbsp;&nbsp;Ireland</option>
                          </select>
                          <br clear="all" />
                          <label className="control-label">
                            Business Postcode :
                          </label>
                          <input
                            name="postcode"
                            type="text"
                            className="form-control"
                            id="postcode"
                            value=""
                            maxLength="10"
                            onChange={() => {}}
                          />
                          <br clear="all" />
                          <label className="control-label">Website :</label>
                          <input
                            name="website"
                            type="text"
                            className="form-control"
                            id="website"
                            value=""
                            maxLength="200"
                            onChange={() => {}}
                          />
                          <br clear="all" />
                          <label className="control-label">
                            Email Address <em className="error_">*</em> :
                          </label>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            value=""
                            maxLength="50"
                            onChange={() => {}}
                          />
                          <br clear="all" />
                          <label className="control-label">
                            Brief description of Business :
                          </label>
                          <textarea
                            name="description"
                            className="form-control h-100"
                            id="description"
                          />
                        </div>

                        <div className="col-sm-5">
                          <div id="id_filltype">Business Type(s)</div>
                          <div id="id_filltype_cont">
                            <p>&nbsp;</p>
                            <div id="id_btype_cont">
                              <label className="control-label">
                                <input
                                  name="civil_construction"
                                  type="checkbox"
                                  value="1"
                                  id="civil_construction"
                                  onChange={() => {}}
                                />
                                &nbsp; Civil Construction
                              </label>
                              <br />
                              <label className="control-label">
                                <input
                                  name="commercial_building"
                                  type="checkbox"
                                  value="1"
                                  id="commercial_building"
                                  onChange={() => {}}
                                />
                                &nbsp; Commercial Building{' '}
                              </label>
                              <br />
                              <label className="control-label">
                                <input
                                  name="residentia_building"
                                  type="checkbox"
                                  value="1"
                                  id="residentia_building"
                                  onChange={() => {}}
                                />
                                &nbsp; Residential Building{' '}
                              </label>
                              <br />
                              <label className="control-label">
                                <input
                                  name="pool_builders"
                                  type="checkbox"
                                  value="1"
                                  id="pool_builders"
                                  onChange={() => {}}
                                />
                                &nbsp; Pool Builders
                              </label>
                              <br />
                              <label className="control-label">
                                <input
                                  name="excavation"
                                  type="checkbox"
                                  value="1"
                                  id="excavation"
                                  onChange={() => {}}
                                />
                                &nbsp; Excavation
                              </label>
                              <br />
                              <label className="control-label">
                                <input
                                  name="earth_moving"
                                  type="checkbox"
                                  value="1"
                                  id="earth_moving"
                                  onChange={() => {}}
                                />
                                &nbsp; Earth Moving
                              </label>{' '}
                              <br />
                              <label className="control-label">
                                <input
                                  name="landscaping"
                                  type="checkbox"
                                  value="1"
                                  id="landscaping"
                                  onChange={() => {}}
                                />
                                &nbsp; Landscaping
                              </label>
                              <br />
                              <label className="control-label">
                                <input
                                  name="equipment_hire"
                                  type="checkbox"
                                  value="1"
                                  id="equipment_hire"
                                  onChange={() => {}}
                                />
                                &nbsp; Equipment Hire{' '}
                              </label>
                              <br />
                              <label className="control-label">
                                <input
                                  name="testing_certification"
                                  type="checkbox"
                                  value="1"
                                  id="testing_certification"
                                  onChange={() => {}}
                                />
                                &nbsp; Testing and Certification
                              </label>
                              <br />
                              <label className="control-label">
                                <input
                                  name="plumbing"
                                  type="checkbox"
                                  value="1"
                                  id="plumbing"
                                  onChange={() => {}}
                                />
                                &nbsp; Plumbing{' '}
                              </label>
                              <br />
                              <label className="control-label">
                                <input
                                  name="electrical"
                                  type="checkbox"
                                  value="1"
                                  id="electrical"
                                  onChange={() => {}}
                                />
                                &nbsp; Electrical{' '}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12" align="center">
                          <div
                            id="bot_add"
                            className="cont_butt visible d-inline"
                          >
                            <br clear="all" />
                            <br />
                            <input
                              name="terms"
                              type="checkbox"
                              value="1"
                              id="terms"
                              onClick={() => {}}
                            />
                            &nbsp;&nbsp; I agree to the Terms of Use of this
                            site. You must agree to the terms to continue.
                            <br clear="all" />
                            <br />
                            <input
                              name="add"
                              type="submit"
                              className="btn btn-lg btn-success"
                              id="add"
                              disabled="disabled"
                              value="Post Your Contactor Fill Listing"
                              onClick={() => {}}
                            />
                          </div>

                          <div
                            id="bot_edit"
                            className="cont_butt invisible d-none"
                          >
                            <p>&nbsp;</p>
                            <input
                              name="edit"
                              type="submit"
                              className="btn btn-lg btn-success"
                              id="edit"
                              value="Modify Your Contactor Fill Listing"
                            />
                          </div>

                          <br clear="all" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AccountContactor;
