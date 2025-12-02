import React from 'react';
import { motion } from 'framer-motion';
import info from '../data/info.json';

const Home = () => {
    return (
        <div className="home">
            <section className="hero section" style={{
                textAlign: 'center',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 'var(--spacing-xl) 0'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '3rem', marginBottom: '0.5rem' }}
                >
                    {info.name}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}
                >
                    {info.tagline}
                </motion.p>
            </section>
        </div>
    );
};

export default Home;
