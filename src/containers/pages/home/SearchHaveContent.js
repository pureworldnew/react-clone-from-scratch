import React, { useState } from 'react';

const SearchHaveContent = ({}) => {
  return (
    <section className="section-content dirt-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="dirt_heading">
              <h2>Clean Fill Near me</h2>
            </div>

            <h3>Clean Fill Directory</h3>

            <p>
              To find a member who has available Fill, use this Search Tool to
              view the “Have Fill” listings based on your selection criteria. It
              is your best solution for saving time, manpower and most of all
              money.
              <br />
              Please select one or more Fill Types and any location or time
              period(s) if preferred.
            </p>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <form
                  name="fform"
                  id="fform"
                  method="post"
                  className="form-horizontal"
                >
                  <label className="control-label">Country :</label>
                  <select
                    name="country"
                    id="country"
                    className="form-control"
                    onchange="getCity('https://www.cleanfill.net/findcity.php?country='+this.value)"
                  >
                    <option value="Canada">Canada</option>
                    <option value="United States">United States</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Norway">Norway</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                  <br clear="all" />
                  <label className="control-label">Province/State :</label>
                  <div id="citydiv">
                    {' '}
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
                      <option value="Ontario">&nbsp;&nbsp;Ontario</option>
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
                  <br clear="all" />

                  <label className="control-label">City :</label>
                  <input
                    name="city"
                    type="text"
                    className="form-control"
                    id="city"
                    value=""
                    maxLength="50"
                  />
                  <br clear="all" />

                  <p>
                    *Your Country is not listed?{' '}
                    <a href="https://www.cleanfill.net/contact">Contact us!</a>
                  </p>
                  <p>
                    If you can’t find a member who has what you are looking for
                    - Create your own "
                    <a href="https://www.cleanfill.net/my_account/listings/need">
                      Need Fill
                    </a>
                    " listing to get your fill moving faster!!
                  </p>
                  <input
                    name="search"
                    type="button"
                    className="btn btn-lg btn-success"
                    id="search"
                    value="Search"
                  />
                </form>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchHaveContent;
