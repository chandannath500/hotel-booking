import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Resort = () => {



    const photos = [
      {
        src: "../assets/images/re1.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/re2.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/re3.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/re4.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/re5.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/re6.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/re7.jpg",
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
                  <h2 className='hotelTitle'><FontAwesomeIcon icon={faHome} /> Resorts</h2><hr />

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

export default Resort