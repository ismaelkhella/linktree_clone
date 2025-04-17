// src/LinkItem.js
import React from 'react';
import './LinkItem.css';
const LinkItem = ({ title, url, icon, img, extraClass = '' }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="link-item"
    >
      <span className="link-text">{title}</span>
      {img ? (
        <img src={img} alt={title} className={`link-image ${extraClass}`} />
      ) : (
        <i className={`${icon} link-icon`} aria-hidden="true"></i>
      )}
    </a>
  );
};


export default LinkItem;
