/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  setContainerClassnames,
  clickOnMobileMenu,
  changeLocale,
} from '../../redux/actions';

import { searchPath, adminRoot } from '../../constants/defaultValues';

const TopNav = ({
  history,
  containerClassnames,
  menuClickCount,
  selectedMenuHasSubItems,
  setContainerClassnamesAction,
  clickOnMobileMenuAction,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [searchKeyword, setSearchKeyword] = useState('');

  const search = () => {
    history.push(`${searchPath}?key=${searchKeyword}`);
    setSearchKeyword('');
  };

  const handleDocumentClickSearch = (e) => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('navbar') ||
        e.target.classList.contains('simple-icon-magnifier'))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains('simple-icon-magnifier')) {
        search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains('search')
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) input.classList.remove('mobile-view');
      removeEventsSearch();
      setSearchKeyword('');
    }
  };

  const removeEventsSearch = () => {
    document.removeEventListener('click', handleDocumentClickSearch, true);
  };

  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem('gogo_current_user');
    history.push('/');
  };

  const menuButtonClick = (e, _clickCount, _conClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    setContainerClassnamesAction(
      _clickCount + 1,
      _conClassnames,
      selectedMenuHasSubItems
    );
  };

  const mobileMenuButtonClick = (e, _containerClassnames) => {
    e.preventDefault();
    clickOnMobileMenuAction(_containerClassnames);
  };

  return (
    <header className="header-main">
      <Navbar light expand="lg">
        <div className="container-fluid">
          <NavbarBrand
            href="/"
            className="col-sm-3 desktop_logo d-none d-lg-block "
          >
            {' '}
            <img alt="Logo" src="/assets/images/logo.png" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="w-100 text-right" />
          <Collapse
            isOpen={isOpen}
            navbar
            className="col-sm-6 justify-content-center mobile-dropdown"
          >
            <Nav className="mr-auto" navbar>
              <NavItem className="active">
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contractor</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Fill Calculator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <div className="col-sm-3 header_account justify-content-md-center d-lg-flex mw-100">
            <ul>
              <li className="mobile_logo d-lg-none">
                <a className="navbar-brand" href="/">
                  <img src="/assets/images/logo.png" alt="mobile logo" />
                </a>
              </li>
              <li className="signin">
                <a href="/user/login">
                  <img src="/assets/images/sign_in_icon.png" alt="signin" />
                  signin
                </a>
              </li>
              <li className="signup">
                <a href="/components">
                  <img src="/assets/images/sign_up_icon.png" alt="signup" />
                  signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
  };
};
export default injectIntl(
  connect(mapStateToProps, {
    setContainerClassnamesAction: setContainerClassnames,
    clickOnMobileMenuAction: clickOnMobileMenu,
    changeLocaleAction: changeLocale,
  })(TopNav)
);
