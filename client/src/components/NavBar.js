import React from 'react';
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ImageHero = (props) =>{ 
  return(
      <> 
        <div className="wrapper-hero">
          <Fade top duration={2300}>
            <h1 className="welcome-text"> {props.heroText} </h1>
          </Fade>
        </div>
      </>
  )
} 

class NavBar extends React.Component{
    state={color:'', transition:null, isToggleOn: false}
    
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll=()=>{
      if(window.scrollY && window.innerWidth > 510){
          this.setState({color:'var(--grey-color)',transition: 'background 1s linear'}) 
      }else{
          this.setState({color:'',transition: 'background 0.3s linear'})
      }
    }

    handleClick=()=>{ // close bars button after clicking on a nav item
      this.setState({isToggleOn:false}); 
    }
   
    handleButton=()=> { //close or open the bars button
      this.setState(state => ({ isToggleOn:!state.isToggleOn, transition: ''}));
    }
    
    render(){
      const {color,transition,isToggleOn} = this.state;
      return (
        <nav id='navbar'   > 
          <ul className={`topnav ${isToggleOn? 'responsive' : ''}`} style={{background:color, transition}} onScroll={this.handleScroll}> 

            <li className='icon-bars nav-item' onClick={()=>this.handleButton()} >
              <span><FontAwesomeIcon icon='bars'/></span>
            </li>

            <Link to={'navbar'} smooth={true} duration={500} className='nav-item-left'>
                  <FontAwesomeIcon icon='home' />
            </Link>

            {this.props.items.map((item, index) =>{
                return <li key={index}  className={`nav-item`} >
                          <Link activeClass='active-nav' to={item} spy={true} smooth={true} duration={500} onClick={this.handleClick}>{item}</Link>
                       </li>
            })}
          </ul>
        </nav>
      );
    }
  };
  
  export default NavBar;

  