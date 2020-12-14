import React, { useState } from 'react';

const ContractorContent = ({}) => {
  return (
    <section className="contractor-content-section mt-40 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="dirt_heading">
              <h2>Contactors Fill Search Result Listing</h2>
            </div>
            <p>
              The listings below matched your Contactors Fill search criteria.
              <br />
              Use the{' '}
              <img
                src="/assets/images/search_result_Listings.gif"
                alt=""
              />{' '}
              icon to view all listing of a Member. Use the{' '}
              <img src="/assets/images/search_result_Member.gif" alt="" /> icon
              to Contact that Member.
              <strong>
                You must have an active membership to view Contact Information
                for these listings.
              </strong>
            </p>
            <p>&nbsp;</p>
            <section className="page_listing page_listing_medium">
              <div className="container table-responsive">
                <div className="row listing_header">
                  <ul>
                    <li className="w-25">
                      <span>
                        <img src="https://www.cleanfill.net/images/arrow_up.png" />
                      </span>
                      Business Type
                    </li>
                    <li className="w-15">
                      <span>
                        <img src="https://www.cleanfill.net/images/city_icon.png" />
                      </span>
                      Business Name
                    </li>
                    <li className="w-15">
                      <span>
                        <img src="/assets/images/state_icon.png" />
                      </span>
                      City/Town
                    </li>
                    <li className="w-30">
                      <span>
                        <img src="/assets/images/details_icon.png" />
                      </span>
                      Brief description of Business
                    </li>
                    <li className="w-10">
                      <span>
                        <img src="/assets/images/phone.png" />
                      </span>
                      Contact
                    </li>
                  </ul>
                </div>
                <div className="row listing_content">
                  <div className="col-sm-12 list nohidde1">
                    <ul>
                      <li className="w-25 fill_type" data-label="Business Type">
                        Excavation
                      </li>
                      <li className="w-15" data-label="Business Name">
                        IDK EXCAVATING LLC 40HRS REG{' '}
                      </li>
                      <li className="w-15" data-label="City/Town">
                        <span>Gap</span>
                      </li>
                      <li
                        className="w-30"
                        data-label="Brief description of Business"
                      >
                        <span></span>
                      </li>
                      <li className="w-10" data-label="Contact">
                        <a href="https://www.cleanfill.net/contactor/contact/14038">
                          <img
                            src="https://www.cleanfill.net/themes/modern/images/search_result_Member.gif"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 list nohidde1">
                    <ul>
                      <li className="w-25 fill_type" data-label="Business Type">
                        Landscaping
                      </li>
                      <li className="w-15" data-label="Business Name">
                        Perfect Lawn
                      </li>
                      <li className="w-15" data-label="City/Town">
                        <span>Johnson City</span>
                      </li>
                      <li
                        className="w-30"
                        data-label="Brief description of Business"
                      >
                        <span>
                          Perfect Lawn, distributors and installers of EasyTurf,
                          artificial landscaping turf for homes, pets, children
                          centers, etc.{' '}
                        </span>
                      </li>
                      <li className="w-10" data-label="Contact">
                        <a href="https://www.cleanfill.net/contactor/contact/4494">
                          <img
                            src="/assets/images/search_result_Member.gif"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 list_pagination">
                    <ul>
                      <li className="active_page">
                        <a href="https://www.cleanfill.net/search/contactor/result/1-1">
                          1
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractorContent;
