import React, { useState } from 'react';

const ContactContent = ({}) => {
  return (
    <section className="contact-content-section mt-40 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="dirt_heading">
              <h2>Contact Us</h2>
            </div>

            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div className="row">
              <div className="col-lg-3">
                <img src="/assets/images/contact_img.png" alt="" />
              </div>
              <div className="col-lg-9">
                <p></p>
                <p className="fs-24">
                  Thank you for your interest in Clean Fill network. If you
                  would like to learn more about our company, or if you have
                  questions about our memberships we offer. We look forward to
                  hearing from you.
                </p>
                <p className="fs-14">
                  <span className="color-ff0000 fs-27">
                    <strong>Please don't ask for clean fill dirt</strong>
                  </span>
                  <br />
                  we are just a fill dirt listing site, Please post in need or
                  have fill section..
                </p>
                <p className="fs-14">
                  If you have any problems or need help please email us.
                </p>{' '}
                <p></p>
              </div>
            </div>

            <p>&nbsp;</p>
            <div className="error_"></div>

            <p>&nbsp;</p>
            <div className="row ">
              <div className="col-md-12 mb-md-0 mb-5">
                <form
                  name="rform"
                  id="rform"
                  action=""
                  method="post"
                  className="form-horizontal"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label for="name" className="">
                          Your name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label for="email" className="">
                          Your email
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <label for="subject" className="">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <label for="message">Your message</label>
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          className="form-control md-textarea"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div className="form-group">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LdW3boUAAAAAL0l97ubIilhS6oElmnR1fJV9r8p"
                    >
                      <div className="w-304 h-78">
                        <div>
                          <iframe
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdW3boUAAAAAL0l97ubIilhS6oElmnR1fJV9r8p&amp;co=aHR0cHM6Ly93d3cuY2xlYW5maWxsLm5ldDo0NDM.&amp;hl=en&amp;v=qc5B-qjP0QEimFYUxcpWJy5B&amp;size=normal&amp;cb=gjlcfgcctimk"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-3pabs5i0wojk"
                            frameborder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                          ></iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          className="g-recaptcha-response"
                        ></textarea>
                      </div>
                      <iframe className="d-none"></iframe>
                    </div>
                  </div>

                  <div className="text-center text-md-left">
                    <input
                      name="send"
                      type="submit"
                      id="send"
                      value="Send"
                      className="btn btn-lg btn-success"
                    />
                  </div>
                  <div className="status"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
