import React from 'react'
import "../Footer/Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className='footer-header'>
        <div className="footer-header-icon">
      <img src="/static/media/logo.0f99324454e3c3ccba98.png" class="w-8 object-cover" alt="logo"/>
      <p>City</p>
      </div>
      <div className='icon'>
        {/* <p>df</p>
        <p>dfg</p>
        <p>df</p>
        <p>df</p> */}
      </div>
      </div>
      <div className="container footer__container">
        {/* about */}
        <div className="footer__contents">
          <h2>About us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <a href=" #">Read More &#8594;</a>
        </div>

        {/* who we are */}
        <div className="footer__contents1">
          <h2>Who we are</h2>

          <ul>
            <li>
              <a href=" #">Team</a>
            </li>
            <li>
              <a href=" #">Carrers</a>
            </li>
            <li>
              <a href=" #">Contact us</a>
            </li>
            <li>
              <a href=" #">Locations</a>
            </li>
          </ul>
        </div>

        {/* Our Work */}
        <div className="footer__contents2">
          <h2>Our work</h2>

          <ul>
            <li>
              <a href=" #">Feature</a>
            </li>
            <li>
              <a href=" #">Latest</a>
            </li>
            <li>
              <a href=" #">Browse Archive</a>
            </li>
            <li>
              <a href=" #">Video for web</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__contents3">
          <h2>Newsletter</h2>
          <p>
           Lorem ipsum dolor sit amet.
          </p>
          <form>
          
            <input type="text" placeholder="email" />
            <button type="button">
              {/* <FontAwesomeIcon icon={faTelegramPlane} /> */}
            </button>
          </form>
        </div>
      </div>


      <div className="container footer__copyright">
        <p>
          Copyright © 2022 All rights reserved | Lorem ipsum dolor sit amet.
          <span> City</span>
        </p>
      </div>

    </div>
  )
}

export default Footer
