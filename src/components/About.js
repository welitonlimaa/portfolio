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
                  Sou <strong>Desenvolvedor Web Full Stack Junior</strong>, nascido e criado no interior do Tocantins. Atualmente, estou investindo 
                  meus esforços em estudos de Desenvolvimento Web Full Stack e, como forma de aplicar meus conhecimentos, tenho me 
                  dedicado a desenvolver diversos projetos que visam aprimorar minhas habilidades e, ao mesmo tempo, contribuir com a 
                  comunidade tech.
                </p>
                <p className="about__content-details-para">
                  Desde os meus 15 anos, tenho paixão pela programação e já tive contato com diversas linguagens como C++, PHP, Java e 
                  JavaScript. Com a constante evolução tecnológica, busco estar sempre aprendendo e contribuindo para o desenvolvimento 
                  de soluções cada vez mais eficientes e inovadoras.
                </p>
              </div>
              <a href="#footer" className="btn btn--med btn--theme dynamicBgClr">Contato</a>
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