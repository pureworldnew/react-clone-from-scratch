import React from 'react';

const AccountOverview = ({ match }) => (
  <section className="section-content dirt-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="dirt_heading">
            <h2>My Account</h2>
          </div>

          <h2>
            Account Overview
            <strong>
              {' '}
              <br />
            </strong>
          </h2>
          <p>
            Welcome fill Management to your Account page. From here you have
            access to control all aspects of your CleanFILL.net member account.
          </p>
          <ul className="my_accc interior_page"></ul>

          <center>
            <script type="text/javascript"></script>
            <script
              type="text/javascript"
              src="https://pagead2.googlesyndication.com/pagead/show_ads.js"
            ></script>
          </center>
        </div>
      </div>
    </div>
  </section>
);
export default AccountOverview;
