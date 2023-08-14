import React, { useEffect } from 'react'
import City from '../../components/city/City'
import GridImages from '../../components/gridImages/GridImages'
import Header from '../../components/header/Header'
import PropertyType from '../../components/propertyType/PropertyType'
import Tops from '../../components/Tops/Tops'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import './home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <City />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyType />
        <Tops />
        <GridImages />
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}

export default Home
