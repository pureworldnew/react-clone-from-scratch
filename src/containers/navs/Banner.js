import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Banner = ({ history }) => {
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
                  <DropdownItem onClick={() => history.push('/search/need')}>
                    Search Need Fill
                  </DropdownItem>
                  <DropdownItem
                    onClick={() =>
                      localStorage.getItem('gogo_current_user')
                        ? history.push('/app/account/needfill')
                        : history.push('/user/login')
                    }
                  >
                    Post Need Fill
                  </DropdownItem>
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
                  <DropdownItem onClick={() => history.push('/search/have')}>
                    Search Have Fill
                  </DropdownItem>
                  <DropdownItem
                    onClick={() =>
                      localStorage.getItem('gogo_current_user')
                        ? history.push('/app/account/havefill')
                        : history.push('/user/login')
                    }
                  >
                    Post Have Fill
                  </DropdownItem>
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
