import React from 'react'
import Banner from '../../components/banner/Banner'
import Brand from '../../components/brand/Brand'
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts'
import Services from '../../components/services/Services'
import Gallery from '../../components/gallery/Gallery'

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <TrendingProducts />
      <Services />
      <Gallery />
    </div>
  )
}

export default Home