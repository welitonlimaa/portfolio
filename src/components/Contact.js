/* eslint-disable no-undef */
import React, { useRef } from "react";
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();
 
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_vpxsy89', 'template_9nniiyj', form.current, 'l07z6yw30yfgv_rL0')
        .then(() => {
            alert('Mensagem enviada com sucesso!');
        }, (error) => {
            alert(error.message);
        });
      e.target.reset();
    };
    return (
      <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contato</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Entre em contato comigo!
          </span>
        </h2>
        <div className="contact__form-container">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">Nome</label>
              <input
                required
                placeholder="Seu Nome..."
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">Email</label>
              <input
                required
                placeholder="Seu Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">Mensagem</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Sua mensagem"
                name="message"
                id="message"
              ></textarea>
            </div>
            <input type="submit" value="Enviar" className="btn btn--theme contact__btn" />
          </form>
        </div>
      </div>
    </section>
    )
}

export default Contact;