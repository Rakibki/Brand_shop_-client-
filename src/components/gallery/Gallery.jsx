import React from 'react'
import img1 from "../../assets/images/gallery/instagram-1.jpg"
import img2 from "../../assets/images/gallery/instagram-2.jpg"
import img3 from "../../assets/images/gallery/instagram-3.jpg"
import img4 from "../../assets/images/gallery/instagram-4.jpg"
import img5 from "../../assets/images/gallery/instagram-5.jpg"

const Gallery = () => {
  return (
    <section className='grid gap-4 px-6 py-2 md:px-10 lg:px-16 grid-cols-5'>
        <img className='rounded-lg' src={img1} alt="" />
        <img className='rounded-lg' src={img2} alt="" />
        <img className='rounded-lg' src={img3} alt="" />
        <img className='rounded-lg' src={img4} alt="" />
        <img className='rounded-lg' src={img5} alt="" />
    </section>
  )
}

export default Gallery