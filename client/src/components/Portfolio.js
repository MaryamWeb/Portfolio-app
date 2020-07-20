import React from 'react';
import {ModalBox} from './Modal';
import Fade from 'react-reveal/Fade';
import ImagDrawing from './Drawing.png';
import ImagMarvel from './marvel.png';
import ImagPortfolio from './heroimageportfolio.png';
import AdobeXD from './AdobeXD.png';
import sketch from './sketch.jpg';
import DrawingAppLogin from'./DrawingAppLogin.png';
import DrawingAppHomePage from'./DrawingAppHomePage.png';
import DrawingAppNewDrawing from'./DrawingAppNewDrawing.png';
import DrawingAppNewFAQ from'./DrawingAppNewFAQ.png';
import DrawingAppViewDrawing from'./DrawingAppViewDrawing.png';
import DrawingAppEditDrawing from'./DrawingAppEditDrawing.png';

const Portfolio =() =>{
    return(
        <>
            <h1>Portfolio</h1>
            <div className='portfolio-box-container'>
            <Fade  duration={2000}  >
                <Box content='A personal drawing website to share my art' 
                     img={`url(${ImagDrawing})`}
                     title='My Drawing Website' 
                     description='This is a RESTful web application that contains my art, FAQ and a contact form. I can create, edit and delete posts after logging in'
                     tech='nodejs, MongoDB, Bootstrap'
                > 
                    <h5>Visit Website: <a href='https://maryamaljawayedart.herokuapp.com/' target='_blank' rel="noopener noreferrer"> Link</a> </h5>
                    <div className='modal-explaining'>
                    <hr/>
                        <p>Here is the login page</p>
                        <img src={DrawingAppLogin} alt="login"/>
                        <p>After logging in, the navigation bar displays new items (Logout, New Drawing and New FAQ)</p>
                        <img src={DrawingAppHomePage} alt="after login homepage"/>
                        <p>New Drawing tab: Shows a form to create a new post</p>
                        <img src={DrawingAppNewDrawing} alt="upload a new drawing form"/>
                        <p>New FAQ tab: Shows a form to create a new FAQ</p>
                        <img src={DrawingAppNewFAQ} alt="upload a new fax form"/>
                        <p>When clicking on a post, two buttons will appear that allows me to edit or delete a post</p>
                        <img src={DrawingAppViewDrawing} alt="view a specific drawing"/>
                        <p>Editing the post form</p>
                        <img src={DrawingAppEditDrawing} alt="edit a drawing form"/>
                    </div>
                </Box>
            </Fade>

            <Fade duration={2000} delay={500} >
                <Box content='A content management system blog website based on Marvel'
                    img={`url(${ImagMarvel})`}
                    title='Marvel Blog Website' 
                    description='A CMS blog site where a user can create an account  write/edit/delete blog posts, comment on posts, and search by a specific category ' 
                    tech='PHP, MySQL'
                >
                    <h5>Github:  <a href='https://github.com/MaryamWeb/Marvel' target='_blank'  rel="noopener noreferrer"> Link</a></h5> 
                </Box>
            </Fade>

            <Fade duration={2000} delay={1000} >
                <Box content='My portfolio' 
                     img={`url(${ImagPortfolio})`}
                     title='My portfolio website' 
                     description='Built this website to showcase my skills and projects'
                     tech='React, nodejs'
                > 
                <h5>Github:  <a href='https://github.com/MaryamWeb/Portfolio-app' target='_blank'  rel="noopener noreferrer"> Link</a></h5> 
                <div className='modal-explaining'>
                    <hr/>
                        <p>I First started by sketching out the website on paper</p>
                        <img src={sketch} alt="Sketch"/>
                        <p>Then designed the website on AdobeXD, making sure to choose all the assets</p>
                        <img src={AdobeXD}  alt="AdobeXD"/>
                        <p>These steps help to visualize what the website would look like. After completing the design process, I began coding the website</p>
                </div>
                 </Box>
            </Fade>

            </div>
        </>
    )
}

const Box = props =>{
    return(
            <div className="box box-img" style={{backgroundImage:props.img}}>
                <div className="overlay">
                    <p>{props.content}</p>
                    <ModalBox {...props} />
                </div>
            </div>
    )
}

export default  Portfolio;
