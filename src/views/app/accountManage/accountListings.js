import React, { useState } from 'react';

const AccountListings = () => {
  const [activebtn, setActiveBtn] = useState(false);

  return (
    <>
      <section className="section-content dirt-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12"></div>
          </div>
        </div>
      </section>
      <section className="section-content dirt-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form
                name="fform"
                id="fform"
                action=""
                method="post"
                className="form-horizontal"
              >
                <div className="cont_tables " id="mod_list">
                  <h3>
                    <img
                      src="https://www.cleanfill.net/themes/modern/images/proy_specs.jpg"
                      alt=""
                    />
                    &nbsp;&nbsp;Have Listing
                  </h3>

                  <section className="page_listing page_listing_medium">
                    <div className="container table-responsive">
                      <div className="row listing_header">
                        <ul>
                          <li className="w-pc-5"></li>
                          <li className="w-pc-20">
                            <span>
                              <img src="https://www.cleanfill.net/images/arrow_up.png" />
                            </span>
                            Fill Type
                          </li>
                          <li className="w-pc-15">
                            <span>
                              <img src="https://www.cleanfill.net/images/city_icon.png" />
                            </span>
                            City
                          </li>
                          <li className="w-pc-12">
                            <span>
                              <img src="https://www.cleanfill.net/images/state_icon.png" />
                            </span>
                            State/Province
                          </li>
                          <li className="w-pc-12">
                            <span>
                              <img src="https://www.cleanfill.net/images/details_icon.png" />
                            </span>
                            Date
                          </li>
                          <li className="w-pc-10">on/off</li>
                          <li className="w-pc-10">edit</li>
                          <li className="w-pc-10">delete</li>
                        </ul>
                      </div>
                      <div className="row listing_content"></div>
                    </div>
                  </section>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="section-content dirt-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form
                name="fform"
                id="fform"
                action=""
                method="post"
                className="form-horizontal"
              >
                <div className="cont_tables " id="mod_list">
                  <h3>
                    <img
                      src="https://www.cleanfill.net/themes/modern/images/proy_specs.jpg"
                      alt=""
                    />
                    &nbsp;&nbsp;Need Listing
                  </h3>

                  <section className="page_listing page_listing_medium">
                    <div className="container table-responsive">
                      <div className="row listing_header">
                        <ul>
                          <li className="w-pc-5"></li>
                          <li className="w-pc-20">
                            <span>
                              <img src="https://www.cleanfill.net/images/arrow_up.png" />
                            </span>
                            Fill Type
                          </li>
                          <li className="w-pc-15">
                            <span>
                              <img src="https://www.cleanfill.net/images/city_icon.png" />
                            </span>
                            City
                          </li>
                          <li className="w-pc-12">
                            <span>
                              <img src="https://www.cleanfill.net/images/state_icon.png" />
                            </span>
                            State/Province
                          </li>
                          <li className="w-pc-12">
                            <span>
                              <img src="https://www.cleanfill.net/images/details_icon.png" />
                            </span>
                            Date
                          </li>
                          <li className="w-pc-10">on/off</li>
                          <li className="w-pc-10">edit</li>
                          <li className="w-pc-10">delete</li>
                        </ul>
                      </div>
                      <div className="row listing_content"></div>
                    </div>
                  </section>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="section-content dirt-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form
                name="fform"
                id="fform"
                action=""
                method="post"
                className="form-horizontal"
              >
                <div className="cont_tables " id="mod_list">
                  <h3>
                    <img
                      src="https://www.cleanfill.net/themes/modern/images/proy_specs.jpg"
                      alt=""
                    />
                    &nbsp;&nbsp;Contactor Listing
                  </h3>

                  <section className="page_listing page_listing_medium">
                    <div className="container table-responsive">
                      <div className="row listing_header">
                        <ul>
                          <li className="w-pc-5"></li>
                          <li className="w-pc-15">
                            <span>
                              <img src="https://www.cleanfill.net/images/arrow_up.png" />
                            </span>
                            Business <br />
                            Type
                          </li>
                          <li className="w-pc-12">
                            <span>
                              <img src="https://www.cleanfill.net/images/city_icon.png" />
                            </span>
                            Business <br />
                            Name
                          </li>
                          <li className="w-pc-12">
                            <span>
                              <img
                                src="https://www.cleanfill.net/images/details_icon.png"
                                alt=""
                              />
                            </span>
                            Contact <br /> Name
                          </li>
                          <li className="w-pc-12">
                            <span>
                              <img src="https://www.cleanfill.net/images/details_icon.png" />
                            </span>
                            Email
                          </li>
                          <li className="w-pc-12">
                            <span>
                              <img src="https://www.cleanfill.net/images/details_icon.png" />
                            </span>
                            Date
                            <br /> Posted
                          </li>
                          <li className="w-pc-10">on/off</li>
                          <li className="w-pc-10">edit</li>
                          <li className="w-pc-10">delete</li>
                        </ul>
                      </div>
                      <div className="row listing_content"></div>
                    </div>
                  </section>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AccountListings;
