import React from 'react';
import './app.css';
import Wrapper from './Wrapper';
import NavBar,{ImageHero} from './NavBar';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
                                            
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faCopyright, faEnvelope,faArrowRight,faBars,faHome} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCopyright,faEnvelope,faArrowRight,faBars,faHome)

class App extends  React.Component {
state = {data: null};
 
  componentDidMount(){ 
    this.props.hideLoader();
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  } 

  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
            <>
              <NavBar items={['About', 'Portfolio', 'Skills', 'Contact']} /> 
              <ImageHero heroText='Hello, I am Maryam'/>  
              <Wrapper sectionName='About'><About/></Wrapper>
              <Wrapper sectionName='Portfolio'><Portfolio/></Wrapper>
              <Wrapper sectionName='Skills'><Skills/></Wrapper>
              <Wrapper sectionName='Contact'><Contact/></Wrapper>
              <Footer/>
            </>
    );
  }
}
 
 
export default App;

   