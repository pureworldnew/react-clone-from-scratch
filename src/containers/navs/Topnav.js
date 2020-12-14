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

const TopNav = ({ history, match }) => {
  console.log('history is here', match);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [searchKeyword, setSearchKeyword] = useState('');

  const [active, setActive] = useState('home');

  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem('gogo_current_user');
    history.push('/');
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
              <NavItem className={match.path === '/' ? 'active' : ''}>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem className={match.path === '/about' ? 'active' : ''}>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem className={match.path === '/contractor' ? 'active' : ''}>
                <NavLink href="/contractor">Contractor</NavLink>
              </NavItem>
              <NavItem className={match.path === '/calculator' ? 'active' : ''}>
                <NavLink href="/calculator">Fill Calculator</NavLink>
              </NavItem>
              <NavItem className={match.path === '/faq' ? 'active' : ''}>
                <NavLink href="/faq">FAQ</NavLink>
              </NavItem>
              <NavItem className={match.path === '/contact' ? 'active' : ''}>
                <NavLink href="/contact">Contact us</NavLink>
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
