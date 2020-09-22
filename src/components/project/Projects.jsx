import React from 'react'
import './projects.scss';



import Projectitem from './project-item';

import { projectdata } from './Projectdata';



class Projects extends React.Component  {


state = {
    sections : projectdata
      
}



    render(){
    return (
        <div className='projects-page' id='projects' >
          
           <h1 className='text'>  <span   role="img" aria-label="cd"  > 💿 Projects 🚀</span>  </h1>
           
           <hr/>
           

            <div className='directory-project'>
          
          
           {
             
               this.state.sections.map(({title , imageUrl , linkUrl,info, id}) => (
                   <Projectitem key={id} title={title}  imageUrl={imageUrl}  linkUrl={linkUrl} info={info} />
               ))
           }
                 
                 </div>  
             
                 <div className='gitwork' >
                 <hr/>
 <span className='work'  >Like my work ? OR want to see more work..!? well You can see all on  my Github. </span>
       
       <button
             className=' buttun  grow  pointer bg-black tc br2 Center white'

    onClick={(e) => {
      e.preventDefault();
      window.open('https://github.com/MugheesMb'); /// <==  link your github URL with this one   
      }}
> <i className="cib-github"></i>
    { ' '}Github</button>
    <hr/>

</div>

        </div>

    )
}
}
export default Projects;
