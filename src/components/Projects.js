import React from 'react';
import ProjectCart from './ProjectCart';
import tunesimg from '../assets/png/tunes.png';
import walletimg from '../assets/png/wallet.png';
import shoppingimg from '../assets/png/shoppingcart.png';
import solarsystemimg from '../assets/png/solarsystem.png';
import starwarsimg from '../assets/png/starwars.png';

class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
              tempora explicabo quae quod deserunt eius sapiente
            </span>
          </h2>

          <div className="projects__content">
            <ProjectCart
              image={tunesimg}
              title="More Tunes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium."
              url="https://welitonlimaa.github.io/more-tunes"
            />
            <ProjectCart
              image={shoppingimg}
              title="Shopping Cart"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium."
              url="https://welitonlimaa.github.io/shopping-cart"
            />
            <ProjectCart
              image={walletimg}
              title="Personal Wallet"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium."
              url="https://welitonlimaa.github.io/personal-wallet"
            />
            <ProjectCart
              image={solarsystemimg}
              title="Solar System"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium."
              url="https://welitonlimaa.github.io/solar-system"
            />
            <ProjectCart
              image={starwarsimg}
              title="StarWars Planets"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  facilis tempora, explicabo quae quod deserunt eius sapiente
                  praesentium."
              url="https://welitonlimaa.github.io/starwars-planets"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;