import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Success = () => {
    return (
        <div className="container section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="page-title">Message Envoyé !</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Merci de nous avoir contactés. Nous reviendrons vers vous dès que possible.
                </p>
                <Link to="/" className="btn">
                    Retour à l'accueil
                </Link>
            </motion.div>
        </div>
    );
};

export default Success;
