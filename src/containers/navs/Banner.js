import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Banner = ({}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <section className="section-content banner-section">
      <div className="main_banner_text">
        <div className="container">
          <ul className="nav nav-pills mb-3 justify-content-md-center">
            <li className="nav-item">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
          <div className="tab-content">
            <h6>Clean Fill Network</h6>
            <p>
              You can get free fill dirt, increase productivity and
              profitability with this dirt network. “Where to get fill dirt near
              me” is the most popular question on google, you found it clean
              fill network. From clean fill dirt dump sites to clean fill dirt
              for sale near me, clean fill network is the only place you can get
              free topsoil. So the next time you’re looking for clean fill dirt
              for sale, post a classified ad here for free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
