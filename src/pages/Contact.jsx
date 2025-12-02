import React from 'react';
import { motion } from 'framer-motion';
import info from '../data/info.json';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="page-title"
            >
                Contact & Réservation
            </motion.h2>

            <div className="contact-content">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3>Nous contacter</h3>
                    <p><strong>Email:</strong> {info.contact.email}</p>

                    <div className="social-links">
                        <a href={info.contact.instagram} target="_blank" rel="noopener noreferrer" className="btn">
                            Instagram
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3>Demande de Rendez-vous</h3>
                    <form className="contact-form" name="contact" method="POST" action="/success" data-netlify="true" encType="multipart/form-data">
                        <input type="hidden" name="form-name" value="contact" />

                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="project">Description du projet</label>
                            <textarea id="project" name="project" rows="5" required></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="photos">Photos (max 5Mo)</label>
                            <input type="file" id="photos" name="photos" multiple accept="image/*" />
                        </div>

                        <button type="submit" className="btn">Envoyer</button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
