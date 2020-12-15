import React from 'react';

const AccountInfo = ({ match }) => (
  <section className="section-content dirt-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="new_style">
            <h3>
              <img
                src="https://www.cleanfill.net/themes/modern/icons/a_edit_maxi.png"
                alt=""
              />
              <a id="add_new">
                Edit Account Membership
                <p>
                  <i>*</i> means mandatory, please fill in the form below and
                  after select the type of fill you have
                </p>
              </a>
            </h3>
          </div>
          <div className="row clear-left">
            <div className="col-sm-12 new_style">
              <form
                name="rform"
                id="rform"
                action=""
                method="post"
                className="form-horizontal"
              >
                <div className="error_">
                  <span id="error"></span>
                </div>
                <br clear="all" />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-20 id_filltype">General Information</div>
                    <label className="control-label">
                      Name or Company <em className="error_">*</em> :
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      value="FillManagement"
                      maxLength="100"
                      onChange={() => console.log('name change')}
                    />
                    <br />
                    <label className="control-label">
                      Address <em className="error_">*</em> :
                    </label>
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                      id="address"
                      value="1056 -3 Old Derry Rd"
                      maxLength="100"
                      onChange={() => console.log('name change')}
                    />
                    <br />
                    <label className="control-label">
                      City <em className="error_">*</em> :
                    </label>
                    <input
                      name="city"
                      type="text"
                      className="form-control"
                      id="city"
                      value="Mississauga"
                      maxLength="50"
                      onChange={() => console.log('name change')}
                    />
                    <br />
                    <label className="control-label">
                      Province/State<em className="error_">*</em> :
                    </label>
                    <div id="citydiv">
                      <select
                        name="state"
                        type="text"
                        className="form-control"
                        id="state"
                      >
                        <option value="Alberta">&nbsp;&nbsp;Alberta</option>
                        <option value="British Columbia">
                          &nbsp;&nbsp;British Columbia
                        </option>
                        <option value="Manitoba">&nbsp;&nbsp;Manitoba</option>
                        <option value="Newfoundland">
                          &nbsp;&nbsp;Newfoundland
                        </option>
                        <option value="New Brunswick">
                          &nbsp;&nbsp;New Brunswick
                        </option>
                        <option value="Nova Scotia">
                          &nbsp;&nbsp;Nova Scotia
                        </option>
                        <option value="Northwest Territories">
                          &nbsp;&nbsp;Northwest Territories
                        </option>
                        <option value="Nunavut">&nbsp;&nbsp;Nunavut</option>
                        <option value="Ontario" defaultValue>
                          &nbsp;&nbsp;Ontario
                        </option>
                        <option value="Prince Edward Island">
                          &nbsp;&nbsp;Prince Edward Island
                        </option>
                        <option value="Quebec">&nbsp;&nbsp;Quebec</option>
                        <option value="Saskatchewan">
                          &nbsp;&nbsp;Saskatchewan
                        </option>
                        <option value="Yukon Territory">
                          &nbsp;&nbsp;Yukon Territory
                        </option>
                      </select>
                    </div>
                    <br />
                    <label className="control-label">
                      Country <em className="error_">*</em> :
                    </label>
                    <script language="javascript">
                      getCity('https://www.cleanfill.net/findcity.php?country=Canada&state=Ontario');
                    </script>
                    <select
                      name="country"
                      id="country"
                      className="form-control"
                      onChange={() => {
                        console.log('country console');
                      }}
                    >
                      <option value="Canada" defaultValue>
                        Canada
                      </option>
                      <option value="United States">United States</option>
                      <option value="Australia">Australia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Norway">Norway</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                    <br />
                    <label className="control-label">
                      Postal/Zip Code <em className="error_">*</em> :
                    </label>
                    <input
                      name="zipcode"
                      type="text"
                      className="form-control"
                      id="zipcode"
                      value="L5W 1A1"
                      maxLength="10"
                      onChange={() => console.log('zipcode')}
                    />
                    <br />
                    <label className="control-label">
                      Phone Number <em className="error_">*</em>{' '}
                      <em className="style1">(eg. xxx-xxx-xxxx)</em> :
                    </label>
                    <input
                      name="phone"
                      type="text"
                      className="form-control"
                      id="phone"
                      value="647 996 3455"
                      maxLength="20"
                      onChange={() => console.log('phone console')}
                    />
                    <br />
                    <label className="control-label">
                      Fax Number <em className="error_">*</em>{' '}
                      <em className="style1">(eg. xxx-xxx-xxxx)</em> :
                    </label>
                    <input
                      name="fax"
                      type="text"
                      className="form-control"
                      id="fax"
                      value=""
                      maxLength="20"
                      onChange={() => console.log('fax onchange')}
                    />
                    <br />
                    <label className="control-label">Account type :</label>
                    <select name="atype" className="form-control" id="atype">
                      <option value="Personal">&nbsp;Personal</option>
                      <option value="Contactor" defaultValue>
                        &nbsp;Contactor
                      </option>
                    </select>
                    <br />
                    <br />
                    <p>
                      <input
                        name="edit"
                        type="submit"
                        id="edit"
                        value="Save"
                        className="btn btn-lg btn-success mr-25 w-100-imp"
                      />
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-20 id_filltype">Login Information</div>
                    <label className="control-label">
                      User Name <em className="error_">*</em> :
                    </label>
                    <input
                      readOnly
                      name="username"
                      type="text"
                      className="form-control"
                      id="username"
                      value="fillm"
                      maxLength="20"
                    />
                    <br />
                    <label className="control-label">
                      Full Name <em className="error_">*</em> :
                    </label>
                    <input
                      name="fullname"
                      type="text"
                      className="form-control"
                      id="fullname"
                      value="fill Management"
                      maxLength="100"
                      onChange={() => {}}
                    />
                    <br />
                    <label className="control-label">
                      Email Address <em className="error_">*</em> :
                    </label>
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      id="email"
                      value="info@fillmanagement.com"
                      maxLength="50"
                      onChange={() => {}}
                    />
                    <br />
                    <label className="control-label">
                      New Password <em className="error_">*</em> :
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                      value=""
                      maxLength="20"
                      onChange={() => {}}
                    />
                    <br />
                    <label className="control-label">
                      Confirm Password <em className="error_">*</em> :
                    </label>
                    <input
                      name="cpassword"
                      type="password"
                      className="form-control"
                      id="cpassword"
                      value=""
                      maxLength="20"
                      onChange={() => {}}
                    />
                    <br />
                    <div className="mb-20 id_filltype">Contact Information</div>
                    <label className="control-label">
                      <input
                        name="same"
                        type="checkbox"
                        className="checkbox_"
                        value="same"
                        id="same"
                        onClick={() => console.log('checkbox ')}
                      />
                      &nbsp;&nbsp; Same Information
                    </label>{' '}
                    <br />
                    <label className="control-label">
                      Full Name <em className="error_">*</em> :
                    </label>
                    <input
                      name="c_name"
                      type="text"
                      className="form-control"
                      id="c_name"
                      value="FillManagement"
                      maxLength="100"
                      onChange={() => {}}
                    />
                    <br />
                    <label className="control-label">
                      Phone Number <em className="error_">*</em>{' '}
                      <em className="style1">(eg. xxx-xxx-xxxx)</em> :
                    </label>
                    <input
                      name="c_phone"
                      type="text"
                      className="form-control"
                      id="c_phone"
                      value="2898022123"
                      maxLength="20"
                      onChange={() => {}}
                    />
                    <br />
                    <label className="control-label">
                      Extension <em className="error_">*</em> :
                    </label>
                    <input
                      name="c_ext"
                      type="text"
                      className="form-control"
                      id="c_ext"
                      value=""
                      maxLength="20"
                      onChange={() => {}}
                    />
                    <br />
                    <label className="control-label">
                      Fax Number <em className="error_">*</em>{' '}
                      <em className="style1">(eg. xxx-xxx-xxxx)</em> :
                    </label>
                    <input
                      name="c_fax"
                      type="text"
                      className="form-control"
                      id="c_fax"
                      value=""
                      maxLength="20"
                      onChange={() => {}}
                    />
                    <br />
                    <label className="control-label">
                      Email Address <em className="error_">*</em> :
                    </label>
                    <input
                      name="c_email"
                      type="text"
                      className="form-control"
                      id="c_email"
                      value="info@fillmanagement.com"
                      maxLength="50"
                      onChange={() => {}}
                    />
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
export default AccountInfo;
