import React from 'react';
import menu from '../assets/data/menu.json';
import menuicon from '../assets/imgs/svg/ham-menu.svg';
import menucloseicon from '../assets/imgs/svg/ham-menu-close.svg';

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
              {
                menu.map((data, index) => {
                  return (
                    <li key={index} className="header__link-wrapper">
                      <a href={data.href} className="header__link"> {data.text} </a>
                    </li>
                  )
                })
              }
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
            {
                menu.map((data, index) => {
                  return (
                    <button
                      key={index}
                      className="header__sm-menu-link"
                      onClick={this.headerSmallMenuLinks}
                    >
                      <a href={data.href} className="header__link"> {data.text} </a>
                    </button>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;