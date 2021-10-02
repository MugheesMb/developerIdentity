import React from 'react'
import './projects.css';



import Projectitem from './project-item';



class Projects extends React.Component {


  state = {
    sections: [
      {
        info: 'write your app little info here',
        linkUrl: 'deployment link',
      title: '  your app name',

      id: 1,
    },
    {
      info: 'write your app little info here',
      linkUrl: 'deployment link',
    title: '  your app name',
     
      id: 2,     
    },
    {
      info: 'write your app little info here',
      linkUrl: 'deployment link',
    title: '  your app name',
    
      id: 3,
    }
    , {
      info: 'write your app little info here',
      linkUrl: 'deployment link',
    title: '  your app name',
 
        id: 4,
      }
      , {
        info: ' “Try to learn something about everything and everything about something :) "',
        linkUrl: '',
        title: 'Work in Progres',
        id: 5,
      }
    ]

  }



  render() {
    return (
      <div className='projects-page' id='projects' >

        <h1 className='te'>  <span role="img" aria-label="cd"  > 💿 Projects 🚀</span>  </h1>

        <hr />


        <div className='directory-project'>


          {

            this.state.sections.map(({ title, linkUrl, info, id }) => (
              <Projectitem key={id} title={title} linkUrl={linkUrl} info={info} />
            ))
          }

        </div>

        <div className='gitwork' >
          <hr />
          <span className='work'  >Like my work ? OR want to see more work..!? well You can see all on  my Github. </span>

          <button
            className=' buttun  grow  pointer bg-black tc br2 Center white'

            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/MugheesMb');
            }}
          > <i className="cib-github"></i>
            {' '}Github</button>
          <hr />

        </div>

      </div>

    )
  }
}
export default Projects;
