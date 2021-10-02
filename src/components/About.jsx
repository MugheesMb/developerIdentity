import React from 'react'
import './about.css';
import {ReactComponent as Abot} from './images/abot.svg';
const About = () => {
    return (
        <div className='aboutt' id='about' >
        <div>
                 <Abot className='aboutsvg' />
            
           
        </div>
        <div className='me br4' >
             <h2 className='text' >Hola ! I'm Mughees, Senior Web Developer who loves to solve real-world problems
              <span role='img' aria-label="Smiley" >😀 </span>,
              and is seeking to find the opportunity to work in a fun and challenging working environment that will encourage me
               to improve and learn new and necessary skills.I love adventures & taking risks so every second I search for a new thing 
               to do which will help me open up for new opportunities as well as teach me new ideas about life. I am someone who is
                consistently growing themselves and who takes the
                time to continue learning and keep improving myself. I take responsibility for my actions and when things go wrong
                 I don’t look to outside forces to blame, rather I’m someone who looks at where I can improve upon the next time 
                 around. Pointing fingers solves nothing <span role='img' aria-label="sadtype">😅 </span>. I am committed 
                 to building something larger, and someone who puts aside personal gain for the well-being of the group. besides
                  that,  I also love to contribute to open source ;) In the end, 
                  I am on a journey to never stop learning <span role='img' aria-label="correct" >✔</span>. </h2>
        </div>
        

        </div>
    )
}

export default About;
