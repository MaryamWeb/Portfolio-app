import React from 'react';
import Zoom from 'react-reveal/Zoom';
import {HtmlLogo,CssLogo, JsLogo, ReactLogo, BootstrapLogo, SemanticLogo, MongoDBLogo, MySQLLogo, NodejsLogo, PhpLogo} from './SkillsLogo';

const Skills = () =>{
    return(
      <>
        <h1>Skills</h1>

        <h2>Front End</h2>
        <Zoom duration={1900} >
          <div className='skills-row '>
            <HtmlLogo/>
            <CssLogo/>
            <JsLogo/>
            <ReactLogo/>
            <BootstrapLogo/>
            <SemanticLogo/>
          </div>
        </Zoom>
      
        <h2>Databases</h2>
        <Zoom duration={1900}>
          <div className='skills-row'>
            <MongoDBLogo/>
            <MySQLLogo/>
          </div>
        </Zoom>

        <h2>Back End</h2>
        <Zoom duration={1900} >
          <div className='skills-row'>
            <NodejsLogo/>
            <PhpLogo/>
          </div>
        </Zoom>
    </>
    )
}

export default Skills;