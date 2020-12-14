import React, { useState } from 'react';

const AppMenu = () => {
  return (
    <section className="app-menu-section-content">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row row_custom">
              <div className="col-sm-2 active">
                <a href="/app/account/info">
                  <img src="/assets/icons/a_edit_mini_hover.png" alt="" />
                  Manage Account Information
                </a>
              </div>
              <div className="col-sm-2">
                <a href="/app/account/needfill">
                  <img src="/assets/icons/a_down_mini.png" alt="" />
                  Manage Listings Need Fill
                </a>
              </div>
              <div className="col-sm-2">
                <a href="https://www.cleanfill.net/my_account/listings/have">
                  <img src="/assets/icons/a_up_mini.png" alt="" />
                  Manage Listings Have Fill
                </a>
              </div>
              <div className="col-sm-2">
                <a href="https://www.cleanfill.net/my_account/listings/need_have">
                  <img src="/assets/icons/a_job_mini.png" alt="" />
                  My Listings
                </a>
              </div>
              <div className="col-sm-2 ">
                <a href="https://www.cleanfill.net/my_account/listings/contactor">
                  <img src="/assets/icons/a_contactor_mini.png" alt="" />
                  Manage Listings Contactor
                </a>
              </div>

              <div className="col-sm-2">
                <a href="https://www.cleanfill.net/my_account/email_notification">
                  <img src="/assets/icons/a_mail_mini.png" alt="" />
                  Add FREE Email Notifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppMenu;
