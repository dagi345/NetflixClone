import React from 'react'
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Banner from '../../components/Banner/Banner.js'
import Rowlist from '../../components/rows/Rowlist/Rowlist.js'

function Home() {
  return (
    <>
        <Header />
        
        <Banner />

        <Rowlist />
        
        <Footer /> 
    </>
  )
}

export default Home