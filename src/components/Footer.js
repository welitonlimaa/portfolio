import React from 'react';
import linkedinicon from '../assets/imgs/png/linkedin-ico.png';
import githubicon from '../assets/imgs/png/github-ico.png';
import twittericon from '../assets/imgs/png/twitter-ico.png';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="main-footer">
        <div className="main-container">
          <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-2">
              <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Contato</span>
              </h2>
              <div className="main-footer__social-cont">
                <p className="contact-address"><MdEmail /> welitonlimadev@gmail.com</p>
                <p className="contact-address"><RiWhatsappFill /> {"(83)"} 991284455</p>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/weliton-lima/">
                  <img className="main-footer__icon" src={linkedinicon} alt="icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/welitonlimaa">
                  <img className="main-footer__icon" src={githubicon} alt="icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/welitonlimaa">
                  <img className="main-footer__icon" src={twittericon} alt="icon" />
                </a>
              </div>
            </div>
            <div className="main-footer__row main-footer__row-1">
              <br />
              <h4 className="heading heading-sm text-lt">Weliton Lima</h4>
              <blockquote>
                <p className="main-footer__short-desc">
                  <i>
                    Como sou pouco e sei pouco, faço o pouco que me cabe me dando por inteiro.
                  </i>
                </p>
                <footer className="main-footer__short-descautor">
                  ~ Thiago de Mello
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="main-footer__lower">
            &copy; Copyright 2023. Made by
            <a rel="noreferrer" target="_blank" href>Weliton Lima</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;