import React from 'react';
import linkedinicon from '../assets/png/linkedin-ico.png';
import githubicon from '../assets/png/github-ico.png';
import twittericon from '../assets/png/twitter-ico.png';
import picture from '../assets/jpeg/weliton.jpeg';

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
          <h1 className="heading-primary">Hey, My name is Weliton</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
              tempora explicabo quae quod deserunt eius sapiente solutions for
              complex problems
            </p>
          </div>
          <div className="home-hero__cta">
            <a href="./#projects" className="btn btn--bg">Projects</a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a href className="home-hero__social-icon-link">
              <img src={linkedinicon} alt="icon" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a href className="home-hero__social-icon-link">
              <img src={githubicon} alt="icon" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a href className="home-hero__social-icon-link">
              <img src={twittericon} alt="icon" className="home-hero__social-icon" />
            </a>
          </div>
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse" />
        </div>
      </section>
    );
  }
}

export default Banner;