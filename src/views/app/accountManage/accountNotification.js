import React, { useState } from 'react';

const AccountNotification = () => {
  const [emailStatus, setEmailStatus] = useState(true);

  return (
    <section className="section-content dirt-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="new_style">
              <h3>
                <img src="/assets/icons/a_mail_maxi.png" alt="" />
                <a id="add_new">Email Notifications</a>
              </h3>
              <br clear="all" />
            </div>

            <p>
              Use our Email Notification tool to have an automatic email sent to
              you (from Clean Fill Network) whenever the Fill you NEED is posted
              in a HAVE FILL Listing or the fill you HAVE is posted in a NEED
              FILL Listing.
            </p>
            <p>
              <strong>
                In addition to your private Email Notification, be sure to post
                a free NEED or HAVE fill listing (from Top menu) to allow others
                to see what you NEED or HAVE.
              </strong>
            </p>
            <p>
              <strong>This is a great tool that works for you 24/7!!</strong>
            </p>
            <p>
              Please select the checkbox to begin adding notifications.
              <br />
              <br />
            </p>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6 new_style">
                <form
                  name="nform"
                  id="nform"
                  action=""
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
                    <option value="Canada" defaultValue>
                      &nbsp;&nbsp;Canada
                    </option>
                    <option value="United States">
                      &nbsp;&nbsp;United States
                    </option>
                    <option value="Australia">&nbsp;&nbsp;Australia</option>
                    <option value="New Zealand">&nbsp;&nbsp;New Zealand</option>
                    <option value="Ireland">&nbsp;&nbsp;Ireland</option>
                    <option value="Norway">&nbsp;&nbsp;Norway</option>
                    <option value="United Kingdom">
                      &nbsp;&nbsp;United Kingdom
                    </option>
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
                  <br clear="all" />

                  <center>
                    <input
                      name="notification"
                      type="checkbox"
                      id="notification"
                      value="1"
                      checked={emailStatus ? 'checked' : ''}
                      onChange={() => {
                        setEmailStatus(!emailStatus);
                      }}
                    />
                    &nbsp;&nbsp; <small>Receive E-Mail</small>
                    <br clear="all" />
                    <br />
                    <input
                      name="acept"
                      type="submit"
                      id="acept"
                      value="Accept"
                      className="btn btn-lg btn-success"
                    />
                  </center>
                </form>
              </div>
              <div className="col-sm-3"></div>
            </div>

            <div className="floating11 invisible d-none" id="f_box1">
              <div className="floating1" align="center">
                <img
                  src="/assets/images/news_img_delete.gif"
                  border="0"
                  id="p_box1"
                  className="float_img"
                  alt=""
                />
                You has been added to receive email notification.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AccountNotification;
