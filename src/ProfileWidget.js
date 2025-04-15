// src/ProfileWidget.js
import React from 'react';
import './ProfileWidget.css';

const ProfileWidget = ({ image, title }) => {
  return (
    <div className="profile-widget">
      <div className="profile-image-container">
        <img src={image} alt={title} className="profile-image" />
      </div>
      <h1 className="profile-title">{title}</h1>
    </div>
  );
};

export default ProfileWidget;
