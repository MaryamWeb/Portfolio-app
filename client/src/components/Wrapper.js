import React from 'react';  

const Wrapper = props =>{
    return(
        <section id={props.sectionName} className="wrapper-box"> 
            <div className="content">
                {props.children}
            </div>
        </section>
    )
}
export default Wrapper;