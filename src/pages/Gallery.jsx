import React from 'react';
import { motion } from 'framer-motion';
import galleryData from '../data/gallery.json';
import './Gallery.css';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    return (
        <div className="container section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="page-title"
            >
                {selectedCategory || 'Galerie'}
            </motion.h2>

            {!selectedCategory ? (
                <div className="gallery-categories">
                    {['Flashs dispos', 'Réalisations'].map((category, index) => {
                        const image = galleryData.images.find(item => item.category === category);
                        if (!image) return null;

                        return (
                            <motion.div
                                key={category}
                                className="gallery-category-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                onClick={() => setSelectedCategory(category)}
                            >
                                <div className="category-image-container">
                                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #222, #333)' }}></div>
                                    <div className="category-overlay">
                                        <h3>{category}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            ) : (
                <div>
                    <button
                        className="btn"
                        onClick={() => setSelectedCategory(null)}
                        style={{ marginBottom: '2rem' }}
                    >
                        ← Retour aux catégories
                    </button>

                    <div className="gallery-grid">
                        {galleryData.images
                            .filter(item => item.category === selectedCategory)
                            .map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className="gallery-item"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {item.src ? (
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div className="image-placeholder">
                                            <span>{item.alt}</span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
