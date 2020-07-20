import React from 'react';  
import Fade from 'react-reveal/Fade'; 

const About = () =>{ 
    return( 
       <>
            <h1 >About</h1>
            <Fade duration={2600} delay={300}>
                <p>Hi there, I’m Maryam Aljawayed<br/> 
                A self-motivated fullstack web developer. Graduated with a computer science bachelor degree and been studying and developing websites for the past 2 years. I’m passionate about web development, I love designing and building websites from start to end, transforming ideas into reality using code is very enjoyable. I am always looking to improve my skills by learning new things. Aside from tech, I also enjoy drawing and sports. Below you'll find a list of my skills and projects
                </p>
            </Fade>
        </>
    )
}
export default About;