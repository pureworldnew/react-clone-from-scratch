import React, { useState } from 'react';

const AccountHaveFill = () => {
  const [activebtn, setActiveBtn] = useState(false);
  const [activeNonCompact, setActiveNonCompact] = useState(false);
  const [activeCompactFill, setActiveCompactFill] = useState(false);
  const [activeCompactRock, setActiveCompactRock] = useState(false);
  const [activeTopsoil, setActiveTopsoil] = useState(false);
  const [activeOther, setActiveOther] = useState(false);
  const setActiveButton = () => {
    setActiveBtn(!activebtn);
  };
  const setNonCompactFill = () => {
    setActiveNonCompact(!activeNonCompact);
  };
  return (
    <section className="section-content dirt-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="payment_info">
              <div className="col-sm-10">
                <p align="center">
                  <img
                    src="https://www.cleanfill.net/themes/modern/images/have_fill.jpg"
                    alt=""
                  />
                </p>
                <p>
                  In order to post in the 'have fill' section you must pay per
                  post. As a result, your listing will be 'Active/Open' to all
                  registered users, including your contact information, making
                  it more convienent for customers to reach you!
                </p>
                <p>
                  <strong>
                    We encourage you to post a listing, even if you need service
                    within 24 hours. It only takes a few minutes to create the
                    listing and it could save you thousands of dollars!
                  </strong>
                </p>

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
                        value="9.99"
                        checked="checked"
                      />{' '}
                      1 post <b>$9.99</b> <br />
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
                        value="CleanFILL.net Have fill amount"
                      />
                      <input
                        type="hidden"
                        name="item_number"
                        id="item_number"
                        value="8.have"
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
                        value="https://www.cleanfill.net/my_account/listings/have/finish"
                      />
                      <input
                        type="hidden"
                        name="cancel_return"
                        value="https://www.cleanfill.net/my_account/listings/have"
                      />
                      <input
                        type="hidden"
                        name="notify_url"
                        value="https://www.cleanfill.net/ipn_have.php"
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default AccountHaveFill;
