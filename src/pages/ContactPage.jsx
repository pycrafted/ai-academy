import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    if (formData.name && formData.email && formData.message) {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus('error');
    }
  };

  return (
    <main className="main-content">
      <h1>Contactez-nous</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Nos coordonnées</h2>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>contact@aiacademy.com</p>
            </div>
            <div className="contact-item">
              <h3>Téléphone</h3>
              <p>+33 1 23 45 67 89</p>
            </div>
            <div className="contact-item">
              <h3>Adresse</h3>
              <p>123 Rue de l'IA, 75001 Paris</p>
            </div>
            <div className="contact-item">
              <h3>Réseaux sociaux</h3>
              <p>@AIAcademy sur Twitter, LinkedIn</p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Envoyez-nous un message</h2>
          {formStatus === 'success' && (
            <div className="form-success">
              Merci pour votre message ! Nous vous répondrons bientôt.
            </div>
          )}
          {formStatus === 'error' && (
            <div className="form-error">
              Veuillez remplir tous les champs.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn">Envoyer</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;