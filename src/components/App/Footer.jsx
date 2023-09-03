import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import {ImGithub} from "react-icons/im";
import {ImLinkedin} from 'react-icons/im';

const Footer = () => {
  return (
    <>
    <span className='footerStyle'>© 2023 Kenan Cibooğlu - Spotify API</span>
    <a href='https://github.com/cibo-24' className='buttonGitHub'><span style={{padding: '10px'}}><ImGithub/></span><a href='https://www.linkedin.com/in/cibokenan24/' className='buttonLinkedln'><span style={{padding: '0px'}}><ImLinkedin /></span></a> </a>
   

    </>
  )
}

export default Footer