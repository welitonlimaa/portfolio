import React from 'react';
import linkedinicon from '../assets/imgs/png/linkedin-ico.png';
import githubicon from '../assets/imgs/png/github-ico.png';
import twittericon from '../assets/imgs/png/twitter-ico.png';
import picture from '../assets/imgs/jpeg/weliton.jpeg';

class Banner extends React.Component {
  render() {
    return (
      <section id="banner" className="home-hero">
        <div className="home-hero__content">
          <img
            src={picture}
            alt='Weliton picture'
            id="picture"
          />
          <h1 className="heading-primary">Olá, meu nome é Weliton</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              Aqui você vai conhecer um pouco sobre mim, minhas skills e também acessar alguns
              dos meus principais projetos desenvolvidos.
              Seja bem vindo e sinta-se a vontade para entrar em contato comigo!
            </p>
          </div>
          <div className="home-hero__cta">
            <a href="./#projects" className="btn btn--bg">Projetos</a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a
              href="https://www.linkedin.com/in/weliton-lima/"
              className="home-hero__social-icon-link"
              target="_blank" rel="noreferrer"
            >
              <img src={linkedinicon} alt="icon" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://github.com/welitonlimaa"
              className="home-hero__social-icon-link"
              target="_blank" rel="noreferrer"
            >
              <img src={githubicon} alt="icon" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://twitter.com/welitonlimaa"
              className="home-hero__social-icon-link"
              target="_blank" rel="noreferrer"
            >
              <img src={twittericon} alt="icon" className="home-hero__social-icon" />
            </a>
          </div>
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <a className="mouse" href='#about' />
        </div>
      </section>
    );
  }
}

export default Banner;