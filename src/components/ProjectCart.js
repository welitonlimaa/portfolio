import React from 'react';
import PropTypes from 'prop-types';

class ProjectCart extends React.Component {
    render() {
        const { image, title, description, url } = this.props;
        return (
            <div className="projects__row">
                <div className="projects__row-img-cont">
                    <img
                        src={image}
                        alt="Software Screenshot"
                        className="projects__row-img"
                        loading="lazy"
                    />
                </div>
                <div className="projects__row-content">
                    <h3 className="projects__row-content-title">{title}</h3>
                    <p className="projects__row-content-desc">
                        {description}
                    </p>
                    <a href={url} className="btn btn--med btn--theme dynamicBgClr" target="_blank" rel="noreferrer">Acessar!</a>
                </div>
            </div>
        );
    }
}

ProjectCart.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default ProjectCart;