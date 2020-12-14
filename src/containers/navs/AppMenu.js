import React, { useState } from 'react';

const AppMenu = ({ history }) => {
  console.log('history of Applayout', history);

  const isActive =
    history.location.pathname === '/app/account/needfill' ? 'active' : '';
  return (
    <section className="app-menu-section-content">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row row_custom">
              <div
                className={
                  history.location.pathname === '/app/account/info'
                    ? 'col-sm-2 active'
                    : 'col-sm-2'
                }
              >
                <a href="/app/account/info">
                  <img
                    src={
                      history.location.pathname === '/app/account/info'
                        ? '/assets/icons/a_edit_mini_hover.png'
                        : '/assets/icons/a_edit_mini.png'
                    }
                    alt=""
                  />
                  Manage Account Information
                </a>
              </div>
              <div
                className={
                  history.location.pathname === '/app/account/needfill'
                    ? 'col-sm-2 active'
                    : 'col-sm-2'
                }
              >
                <a href="/app/account/needfill">
                  <img
                    src={
                      history.location.pathname === '/app/account/needfill'
                        ? '/assets/icons/a_down_mini_hover.png'
                        : '/assets/icons/a_down_mini.png'
                    }
                    alt=""
                  />
                  Manage Listings Need Fill
                </a>
              </div>
              <div
                className={
                  history.location.pathname === '/app/account/havefill'
                    ? 'col-sm-2 active'
                    : 'col-sm-2'
                }
              >
                <a href="/app/account/havefill">
                  <img
                    src={
                      history.location.pathname === '/app/account/havefill'
                        ? '/assets/icons/a_up_mini_hover.png'
                        : '/assets/icons/a_up_mini.png'
                    }
                    alt=""
                  />
                  Manage Listings Have Fill
                </a>
              </div>
              <div
                className={
                  history.location.pathname === '/app/account/listings'
                    ? 'col-sm-2 active'
                    : 'col-sm-2'
                }
              >
                <a href="/app/account/listings">
                  <img
                    src={
                      history.location.pathname === '/app/account/listings'
                        ? '/assets/icons/a_job_mini_hover.png'
                        : '/assets/icons/a_job_mini.png'
                    }
                    alt=""
                  />
                  My Listings
                </a>
              </div>
              <div
                className={
                  history.location.pathname === '/app/account/contactor'
                    ? 'col-sm-2 active'
                    : 'col-sm-2'
                }
              >
                <a href="/app/account/contactor">
                  <img
                    src={
                      history.location.pathname === '/app/account/contactor'
                        ? '/assets/icons/a_contactor_mini_hover.png'
                        : '/assets/icons/a_contactor_mini.png'
                    }
                    alt=""
                  />
                  Manage Listings Contactor
                </a>
              </div>

              <div
                className={
                  history.location.pathname === '/app/account/notifications'
                    ? 'col-sm-2 active'
                    : 'col-sm-2'
                }
              >
                <a href="/app/account/notifications">
                  <img
                    src={
                      history.location.pathname === '/app/account/notifications'
                        ? '/assets/icons/a_mail_mini_hover.png'
                        : '/assets/icons/a_mail_mini.png'
                    }
                    alt=""
                  />
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
