import React from 'react';
import './Footer.css';
import info from '../../data/info.json';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>{info.shortName}</h3>
                    <p>{info.tagline}</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>{info.address.street}</p>
                    <p>{info.address.city}, {info.address.zip}</p>
                    <p>{info.contact.phone}</p>
                    <p>{info.contact.email}</p>
                </div>
                <div className="footer-section">
                    <h4>Horaires</h4>
                    <ul>
                        {info.hours.map((hour, index) => (
                            <li key={index}>{hour}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {info.name}. All rights reserved.</p>
                <a href="/admin" style={{ color: '#444', fontSize: '0.8rem', textDecoration: 'none', marginLeft: '10px' }}>Admin</a>
            </div>
        </footer>
    );
};

export default Footer;
