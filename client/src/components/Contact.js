import React from 'react';  
import axios from 'axios'; 

const validateForm = (errors) => {  //Check there is no error
  let valid = true;
  for(let val of Object.values(errors)){
    if(val){
      valid = false
    }
  }
  return valid;
}
 
const regex           = new RegExp(`^-?[0-9]*$`);
const validEmailRegex = RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
                               
class Contact extends React.Component{ 
  state = {fullname:  '', email: '',message: '',success:'', errorall:'',
              errors: {
                fullname: '',
                email: '',
                message: '',
              }
          };

  CheckAllFieldsRequired=(event)=>{  //Check there is no empty field
    event.preventDefault();
    const {fullname, email, message} = this.state;
    const errors = this.state.errors;
    const {name,value} = event.target; 

    if(!fullname ){  
      errors.fullname='Name field is required!';
    } 
   
    if(!email){  
     errors.email='Email field is required!';
    } 

    if(!message){  
     errors.message='Message field is required!';
    } 

    this.setState({errors, [name]: value}); 
  }

  handleChange=(event)=>{
    event.preventDefault();
    const {name,value} = event.target; 
    const errors = this.state.errors;
    const valueSpace=value.replace(/ /g, "");
    this.setState({success:''});
  
 const validateEmpty = (name) => {
      if(valueSpace.length ===0){
         return `${name} field is required!`;
      }
  }

  const validateName=()=>{
     const string= value.replace(/[A-Za-z-]/g, "");
    if(!regex.test(string)){
      errors.fullname= 'Only letters, numbers and dash are allowed' ;
    } else{
      errors.fullname=( valueSpace.length<4 &&  valueSpace.length>0)?'Name must be more than 4 characters long!':validateEmpty('Fullname');
    }
  }

  const validateEmail=()=>{ 
    errors.email=(!validEmailRegex.test(value) &&  valueSpace.length>0)?'Email is not valid!':validateEmpty('Email');
  }

  const validateMessage=()=>{ 
    errors.message=(valueSpace.length < 15 &&  valueSpace.length>0)?'Message must be More than 15 characters long!':validateEmpty('Message');
  }
  
switch (name) {
  case 'fullname': validateName();
                    break;
  case 'message': validateMessage()
                    break;
  case 'email':   validateEmail()
                    break; 
  default: break;
}
    
  this.setState({errors, [name]: value});
 
}

handleFormSubmit = (event) => { 
  event.preventDefault();
  this.CheckAllFieldsRequired( event);

  if(validateForm(this.state.errors)) {
    axios({
      method: "POST", 
      url:"/",  
      data: {
        fullname:this.state.fullname,
        email:this.state.email,
        message:this.state.message
      }
  }).then((response)=>{ 
      if (response.data.msg === 'success'){
          this.setState({success:`Thank you ${this.state.fullname} for getting in touch, Your email has been sent successfully`});
          this.resetForm()
      }else if(response.data.msg === 'fail'){ 
          this.setState({success:`There was an error trying to send your message. Please try again`});
      }
  })
  }
}

resetForm=()=>{
  this.setState({
    fullname:'',
    email:'',
    message:''
  })
}

render(){
    const {errors} = this.state;  
    return(
        <>
          <h1 className='contact-title'>Contact Me</h1>
          <p className='paragraph-contact'>If you got a question or want to work together, contact me.</p>
          <form onSubmit={this.handleFormSubmit}>
            
              <label className='label-form'>Name: <span className='required'>required</span> </label>
              <input className={` inputBox  ${errors.fullname? "error-box" : ""} `}   
                      type="text" 
                      name='fullname' 
                      value={this.state.fullname} 
                      onChange={this.handleChange} 
              />
              <span className={` ${errors.fullname? "error-text" : ""} `} >{errors.fullname}</span>
              
          
                <label className='label-form'>Email:  <span className='required'>required</span></label>
                <input className={` inputBox  ${errors.email? "error-box" : ""} `}   
                      type="email" 
                      name='email' 
                      value={this.state.email} 
                      onChange={this.handleChange} 
                />
                <span className={` ${errors.email? "error-text" : ""} `} >{errors.email}</span> 

              <label className='label-form'>Message:  <span className='required'>required</span></label>
              <textarea className='textarea-box' 
                        rows='7' 
                        name='message' 
                        value={this.state.message} 
                        onChange={this.handleChange} >
              </textarea>
              <span className={` ${errors.message? "error-text" : ""} `} >{errors.message}</span>
              
              <input type="submit" value="Submit" className='btn-contact'  /> 
              <p className='paragraph-sent'>{this.state.success}</p>
                 
            </form>
        </>
    )
  }
}
  
export default Contact;
