import { faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Apartment = () => {



    const photos = [
      {
        src: "../assets/images/apt1.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/apt2.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/apt3.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/apt4.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/apt5.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/apt6.jpg",
        width: 800,
        height: 600
      },
      {
        src: "../assets/images/apt7.jpg",
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
                  <h2 className='hotelTitle'><FontAwesomeIcon icon={faHome} /> Apartment</h2><hr />

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

export default Apartment