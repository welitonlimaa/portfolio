import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../assets/data/projects';

class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projetos</span>
            <span className="heading-sec__sub">
              Aqui estão alguns dos principais projetos desenvolvidos por mim!
            </span>
          </h2>
          <div className="projects__content">
            {
              projects.map((data, index) => {
                return (
                  <ProjectCard
                    key={index}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    url={data.url}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;