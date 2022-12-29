import React from 'react';
import menuicon from '../assets/svg/ham-menu.svg';
import menucloseicon from '../assets/svg/ham-menu-close.svg';

class Header extends React.Component {
  state = {
    mobile: '',
    isClose: true,
  };

  hamMenuBtn = () => {
    const { mobile, isClose } = this.state;
    if (mobile === 'header__sm-menu--active') {
      this.setState({ mobile: '' });
    } else {
      this.setState({ mobile: 'header__sm-menu--active' });
    }

    this.setState({ isClose: !isClose });
  };

  headerSmallMenuLinks = () => {
    this.setState({ mobile: '', isClose: true });
  };

  render() {
    const { mobile, isClose } = this.state;
    return (
      <header className="header">
        <div className="header__content">
          <div className="header__main">
            <ul className="header__links">
              <li className="header__link-wrapper">
                <a href="#banner" className="header__link"> Home </a>
              </li>
              <li className="header__link-wrapper">
                <a href="#about" className="header__link">About </a>
              </li>
              <li className="header__link-wrapper">
                <a href="#projects" className="header__link">
                  Projects
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="header__main-ham-menu-cont"
              onClick={this.hamMenuBtn}
            >
              <img
                src={isClose ? menuicon : menucloseicon}
                alt="hamburger menu"
                className="header__main-ham-menu"
              />
            </button>
          </div>
        </div>
        <div className={`header__sm-menu ${mobile}`}>
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <button
                className="header__sm-menu-link"
                onClick={this.headerSmallMenuLinks}
              >
                <a href="#banner"> Home </a>
              </button>

              <button
                className="header__sm-menu-link"
                onClick={this.headerSmallMenuLinks}
              >
                <a href="#about"> About </a>
              </button>

              <button
                className="header__sm-menu-link"
                onClick={this.headerSmallMenuLinks}
              >
                <a href="#projects"> Projects </a>
              </button>

              {/* <li className="header__sm-menu-link">
                <a href="./index.html#contact"> Contact </a>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;