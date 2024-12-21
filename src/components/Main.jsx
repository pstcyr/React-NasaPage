import React from 'react';
import Footer from './Footer';

export default function Main(props) {
  return (
    <div className="backgroundImage">
      <div className= "FooterWrapper">
        <Footer {...props} ></Footer>
      </div>
    </div>
 );
}

