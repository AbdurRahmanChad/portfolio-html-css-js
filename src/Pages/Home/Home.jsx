import React from 'react'
import { Helmet } from 'react-helmet'
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";

const Home = () => {
  return (
    <article className="home  active" data-page="home">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Abdur Rahman</title>               
      </Helmet>
    <header>
      <h2 className="h2 article-title">Home</h2>
    </header>
    <section className='home'>
      <div className='home-content'>
      <div className='home-text'>
      <h4 className='h5'>Hello it's Me</h4>
      <h1 className='h2'>Md. Abdur Rahman</h1>
      <h3 className='h4'>And I'm a <span className='text'></span></h3>
      <p className='h5'>I'm a Web Designer With Extensive Experience for Over 1 Years. <br/> Expertise is to Create and Website design, Frontend Design, And many more... </p>
      <div className='home-social'>
      <a href="http://facebook.com">
              <FaSquareFacebook />
            </a>
            <a href="http://">
              <BsInstagram />
            </a>
            <a href="http://">
              <BsLinkedin/>
            </a>
            <a href="http://">
              <BsTwitter/>
            </a>
      </div>
      <button className='h5 home-btn'>About me</button>
      </div>
      <div className='home-img'>
        <img src={"/images/chad2.jpg"} alt='images' width={250}/>
      </div>
      </div>
      
      
      </section>
    </article>
  )
}

export default Home