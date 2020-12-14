import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Banner = ({}) => {
  const [dropdownNeedOpen, setDropdownOpen] = useState(false);
  const [dropdownHaveOpen, setDropdownHaveOpen] = useState(false);

  const toggleNeed = () => setDropdownOpen((prevState) => !prevState);
  const toggleHave = () => setDropdownHaveOpen((prevState) => !prevState);
  return (
    <section className="section-content banner-section banner-section-min">
      <div className="main_banner_text">
        <div className="container">
          <ul className="nav nav-pills mb-3 justify-content-md-center">
            <li className="nav-item">
              <Dropdown
                isOpen={dropdownNeedOpen}
                toggle={toggleNeed}
                className="need-dropdown"
              >
                <DropdownToggle caret>Need Fill</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown
                isOpen={dropdownHaveOpen}
                toggle={toggleHave}
                className="have-dropdown"
              >
                <DropdownToggle caret>Have Fill</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
