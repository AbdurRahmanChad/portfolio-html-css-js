import React from 'react'
import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-info">
              <figure className="avatar-box">
                <img
                  src={"/images/chad.jpg"}
                  alt="Richard"
                  width="80"
                />
              </figure>   
              <div className="info-content">
                <h1 className="name" title="Richard">
                  Md. Abdur Rahman
                </h1>   
                <p className="title">Web developer</p>
              </div>   
              <button className="info_more-btn" data-sidebar-btn>
                <span>Show Contacts</span>    
                <GiClawSlashes />
              </button>
            </div>   
            <div className="sidebar-info_more">
              <div className="separator"></div>   
              <ul className="contacts-list">
                <li className="contact-item">
                  <div className="icon-box">
                    <GiMailbox/>                    
                  </div>   
                  <div className="contact-info">
                    <p className="contact-title">Email</p>    
                    <a href="mailto:abdurrahmanchad0@gmail.com" className="contact-link">
                      abdurrahmanchad0@gmail.com
                    </a>
                  </div>
                </li>    
                <li className="contact-item">
                  <div className="icon-box">
                    <GiPhone/>
                  </div>    
                  <div className="contact-info">
                    <p className="contact-title">Phone</p>
                    <a href="tel:+88 01731-310999" className="contact-link">
                      +880 1731-310999
                    </a>
                  </div>
                </li>    
                <li className="contact-item">
                  <div className="icon-box">
                    <GiCalendar/>                  
                  </div>   
                  <div className="contact-info">
                    <p className="contact-title">Birthday</p>   
                    <time dateTime="1998-12-26">December 26 1998</time>
                  </div>
                </li>    
                <li className="contact-item">
                  <div className="icon-box">
                    <GiMayanPyramid/>
                    <ion-icon name="location-outline"></ion-icon>
                  </div>   
                  <div className="contact-info">
                    <p className="contact-title">Location</p>   
                    <address>Sherpur, Mymensingh, Bangladesh</address>
                  </div>
                </li>
              </ul>    
              <div className="separator"></div>    
              <ul className="social-list">
                <li className="social-item">
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>   
                <li className="social-item">
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>    
                <li className="social-item">
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
      )
    }
export default Sidebar