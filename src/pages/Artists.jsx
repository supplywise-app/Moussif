import React from 'react';
import { motion } from 'framer-motion';
import artistsData from '../data/artists.json';
import './Artists.css';

const Artists = () => {
    return (
        <div className="container section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="page-title"
            >
                Nos Artistes
            </motion.h2>

            <div className="artists-list">
                {artistsData.map((artist, index) => (
                    <motion.div
                        key={artist.id}
                        className="artist-card"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="artist-image">
                            <div className="image-placeholder">
                                <span>{artist.name}</span>
                            </div>
                        </div>
                        <div className="artist-info">
                            <h3>{artist.name}</h3>
                            <p className="specialty">{artist.specialty}</p>
                            <p className="bio">{artist.bio}</p>
                            <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="btn">
                                Voir sur Instagram
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Artists;
