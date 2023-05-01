import React from 'react';
import picture from '../assets/imgs/jpeg/weliton.jpeg';
import socialLinks from '../assets/data/socialLinks';

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
            <a href="./#projects" className="btn btn--bg btn--hover">Projetos</a>
          </div>
        </div>
        <div className="home-hero__socials">
          {
            socialLinks.map((data, index) => {
              return(
                <div key={index} className="home-hero__social">
                  <a
                    href={data.href}
                    className="home-hero__social-icon-link"
                    target="_blank" rel="noreferrer"
                  >
                    <img src={data.image} alt="icon" className="home-hero__social-icon" />
                  </a>
                </div>
              )
            })
          }
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <a className="mouse" href='#about' />
        </div>
      </section>
    );
  }
}

export default Banner;