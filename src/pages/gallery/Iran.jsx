import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Iran = () => {



    const photos = [
      {
        src: "../assets/images/ir1.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ir2.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ir3.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ir4.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ir5.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ir6.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/ir7.jpg",
        width: 800,
        height: 600
      }
    ];

  return (
    <>
      <Header type="smallHeader" />
          <div className="hotelContainer">
          <div className="hotelRow">
                <div className="hotelCol">
                  {/* <h2 className='hotelTitle'>Relax casa Victoria</h2> */}
                  <h2 className='hotelTitle'><FontAwesomeIcon icon={faLocation} /> Iran</h2><hr />

                </div>
            </div>
            <div className="hotelRow">
              <PhotoAlbum layout="rows" photos={photos} />
            </div>
            
          </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Iran