import React from 'react';
import './styles/_footer.scss';

export default function Footer () {
  return (
    <footer className="footer">
    <div className="container footer__container">
      <a href="/" className="logo-small">React ToDo App</a>
      <p className="footer__year">2019</p>
      <a href="https://github.com/rammfall" className="footer__link" target="_blank" rel="noopener noreferrer">My GitHub</a>
    </div>
  </footer>
  );
}
