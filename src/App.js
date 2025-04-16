// src/App.js
import React from 'react';
import './App.css';

import ProfileWidget from './ProfileWidget';
import LinkItem from './LinkItem';

// Importing images for icons
import logo from './images/logo2.png';                   // Rectangular logo
import whatsappGif from './images/whatsapp_icon.gif';     // WhatsApp icon/gif
import snapchatImg from './images/snapchat.png';         // Snapchat button icon
import instagramImg from './images/instagram.png';        // Instagram button icon
import xLogo from './images/xlogo.png';                  // Platform X icon
import locationImg from './images/location.gif';          // Location icon (for both male & female locations)
import youtubeLogo from './images/Youtube_logo.png';      // YouTube icon

import tiktokLogo from './images/tiktok.png';      // YouTube icon
import websiteLogo from './images/website.png';      // YouTube icon

function App() {
  const links = [
    {
      title: "الموقع الالكتروني",
      url: "https://hemaat.net",
      img: websiteLogo
    },
    {
      title: "منصة x",
      url: "https://x.com/hemaatnaj?s=11&t=62FaChk0CcLwnPkK4NNpXw",
      img: xLogo
    },
    {
      title: "سناب شات",
      url: "https://snapchat.com/t/5XiM3DYf",
      img: snapchatImg
    },
    {
      title: "انستقرام",
      url: "https://www.instagram.com/hemaatnaj?igsh=MTgxM3RybTRxa3phbA%3D%3D&utm_source=qr",
      img: instagramImg
    },
    // {
    //   title: "واتساب",
    //   url: "https://wa.me/message/6TSY2FSSKPG3A1?src=qr",
    //   img: whatsappGif
    // },
    {
      title: "تيك توك",
      url: "https://www.tiktok.com/@hemaatnaj?_t=ZS-8vWsZwwWvbD&_r=1",
      img: tiktokLogo
    },
    {
      title: "اليوتيوب",
      url: "https://youtube.com/@hemaatnaj?si=2UHNT6BfYfCC3hOl",
      img: youtubeLogo
    },
    {
      title: "رقم التواصل الرسمي لمركز هِمّات للذكور حي المخيم",
      url: "https://wa.me/message/6TSY2FSSKPG3A1?src=qr",
      img: whatsappGif
    },
    {
      title: "⁠الموقع الجغرافي لمركز هِمّات للذكور حي المخيم",
      url: "https://maps.app.goo.gl/FKNBG63JueCTvJcG7?g_st=com.google.maps.preview.copy",
      img: locationImg
    },
    {
      title: "رقم التواصل الرسمي لمركز هِمّات حي الجامعة قسم الاناث",
      url: "https://wa.me/message/2FWYRSWUEIKQK15",
      img: whatsappGif
    },
    {
      title: "موقع الجغرافي لمركز هِمّات للإناث حي الجامعة",
      url: "https://maps.app.goo.gl/ahVHtDkUfat6afwx6?g_st=com.google.maps.preview.copy",
      img: locationImg
    }
  ];

  return (
    <div className="App">
      <div className="main-container">
        <ProfileWidget
          image={logo}
          title="حساب مجموعة مراكز هِمّات للرعاية النهارية الرسمية"
        />

        <div className="links-container">
          {links.map((link, index) => (
            <LinkItem
              key={index}
              title={link.title}
              url={link.url}
              icon={link.icon}
              img={link.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
