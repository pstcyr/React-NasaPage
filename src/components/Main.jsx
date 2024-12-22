import React from 'react';
import Footer from './Footer';
import SideBar from './SideBar'

export default function Main(props) {
  const {data} = props;
  return (
    <div
    className="backgroundImage"
    style={{
      backgroundImage: `url(${data.url})`,
      backgroundSize: 'contain', // Ensures the entire image is visible
      backgroundRepeat: 'no-repeat', // Prevents tiling of the image
      backgroundPosition: 'center', // Centers the image within the container
      height: '100vh', // Ensures it fills the viewport height
      width: '100%', // Ensures it fills the full width of the container
    }}>
        <div className= "FooterWrapper">
          <Footer {...props} ></Footer>
        </div>
        <SideBar {...props}/>
    </div>
 );
}

