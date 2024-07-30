import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
  return (
    <footer className="bg-slate-200 text-black font-normal z-50 py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg"> 
          © {new Date().getFullYear()} AgriConnect. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-4"> 
          <a
            href="https://www.facebook.com"
            className="text-black hover:text-white text-2xl" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            className="text-black hover:text-white text-2xl" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="text-black hover:text-white text-2xl" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
