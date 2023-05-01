import React from 'react';

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
                  Eu sou <strong> Desenvolvedor Web Full Stack Junior </strong> nascido e criado no
                  interior do Tocantins. Atualmente estou estudando <strong> Desenvolvimento Web Full Stack </strong>,
                  e tenho desenvolvido projetos Frontend para aprimorar minhas habilidades e contribuir com a
                  comunidade tech.
                </p>
                <p className="about__content-details-para">
                  Sou técnico em informática, programo desde os 15 anos de idade e já tive contato com diversas
                  linguagens de programação como: C++, PHP, Java, e JavaScript. Gosto de estar constantemente
                  aprendendo e contribuindo, e me sinto confortável em exercer posições de liderança.
                </p>
              </div>
              <a href="#footer" className="btn btn--med btn--theme dynamicBgClr">Contato</a>
              <a
                href="https://drive.google.com/file/d/1_E041KBBRk0jgrH8eoD2GXWpCnvo1ckj/view?usp=sharing" 
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
                <div className="skills__skill">Node.js</div>
                <div className="skills__skill">Express.js</div>
                <div className="skills__skill">ECMASCRIPT 6</div>
                <div className="skills__skill">TypeScript</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">Next.js</div>
                <div className="skills__skill">Redux</div>
                <div className="skills__skill">Hooks</div>
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">MySQL</div>
                <div className="skills__skill">MongoDB</div>
                <div className="skills__skill">Jest & Testing Library</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">Bootstrap</div>
                <div className="skills__skill">Tailwind CSS</div>
                <div className="skills__skill">Wordpress</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;