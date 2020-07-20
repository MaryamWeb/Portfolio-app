import React from 'react';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer =()=>{ 
  return( 
    <footer>
      <Tooltip text={'My Email:'}> 
          <FontAwesomeIcon icon='envelope' className='footer-icon'/>
      </Tooltip>
      
      <Tooltip text={'Linkedin Page [Coming Soon]'} > 
          <FontAwesomeIcon icon={['fab', 'linkedin']} className='footer-icon'/>
      </Tooltip>

      <Tooltip text={'Visit My Git '} link={'https://github.com/MaryamWeb'} wordlink={'Page'}> 
          <FontAwesomeIcon icon={['fab', 'github']} className='footer-icon'/>
      </Tooltip>

      <div className="secondline-footer">
          <span>copyright  <FontAwesomeIcon icon='copyright'/> 2020 Maryam Aljawayed</span>
      </div>
    </footer>
  )
}


class Tooltip extends React.Component {
  state = { displayTooltip: false }

  showTooltip=()=>{
    this.setState({displayTooltip: true})
  }
  
  hideTooltip=()=>{
    this.setState({displayTooltip: false})
  }

  render() {
    return ( 
      <span className='tooltip'onMouseLeave={this.hideTooltip}>
          {this.state.displayTooltip &&
          <div className='tooltip-box' >
            <p className='tooltip-text'>{this.props.text}
              <a href={this.props.link} rel="noopener noreferrer" target='_blank'>{this.props.wordlink}</a>
            </p>
          </div>
          }
        <span onClick={this.showTooltip}> {this.props.children} </span>
      </span>
    )
  }
}
  
export default Footer; 