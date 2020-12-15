import React, { useState } from 'react';

const SearchNeedContent = ({}) => {
  return (
    <section className="section-content dirt-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="dirt_heading">
              <h2>Clean Fill Wanted near me</h2>
            </div>

            <h3>Clean Fill Wanted Directory</h3>

            <p>
              To find a member who needs clean fill, has a property/company that
              needs loads, use this Search Tool to view the “Need Fill” listings
              based on your criteria. It is your best solution for saving time,
              manpower and most of all money.
            </p>
            <br />
            <p>Please select a location. </p>

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
                    onChange={() => {}}
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
                    onChange={() => {}}
                  />
                  <br clear="all" />

                  <p>
                    *Your Country is not listed?{' '}
                    <a href="https://www.cleanfill.net/contact">Contact us!</a>
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

export default SearchNeedContent;
