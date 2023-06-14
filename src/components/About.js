import React from 'react';
import skills from '../assets/data/skills.json';

class About extends React.Component {
  render() {
    return (
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">Sobre mim</span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Me conheça!</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  Sou um <strong>Desenvolvedor Web Full Stack</strong> altamente motivado e dedicado, com um forte desejo de aprender e crescer 
                  profissionalmente. Tive meu primeiro contato com a programação aos 15 anos e desde então, tenho explorado diversas 
                  linguagens, como C++, PHP, Java e JavaScript. Com habilidades sólidas em desenvolvimento de front-end e back-end, 
                  utilizando tecnologias como Node.js, PHP, React.js e bancos de dados MySQL e MongoDB, sou capaz de criar soluções 
                  inovadoras e eficientes.
                </p>
                <p className="about__content-details-para">
                  Minha paixão pela programação me impulsiona a buscar constantemente novos conhecimentos e 
                  contribuir para o avanço da tecnologia. Estou pronto para fazer parte de equipes de desenvolvimento dinâmicas, 
                  compartilhar minhas habilidades e fazer a diferença no mundo da programação.
                </p>
              </div>
              <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">Contato</a>
              <a
                href="https://github.com/welitonlimaa/welitonlimaa/blob/main/CV-weliton-pereira-lima-junior.pdf" 
                target="_blank" 
                className="btn btn--med btn--theme dynamicBgClr btn--cv"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">Minhas Skills</h3>
              <div className="skills">
                {
                  skills.map((skill, index) => <div key={index} className="skills__skill">{skill}</div>)
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;