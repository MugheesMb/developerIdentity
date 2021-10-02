import React from 'react';
import './project-item.css';

import Flippy, { FrontSide, BackSide } from 'react-flippy';



class Projectitem extends React.Component {

  render() {

    return (

      <div>

        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          style={{
            overflow: 'hidden'


          }} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              backgroundColor: '#41669ddsd',
            }}
          >
            <React.Fragment>
              <div
                className='project-item'>
                <div className='content' >
                  <h1 className='title' >{this.props.title}</h1>
                </div>
              </div>
            </React.Fragment>
          </FrontSide>

          <BackSide
            style={{ backgroundColor: '#4A586E' }}>

            <div className='back center tc  '>
              <h2 className=' underline f3 ' >{this.props.title}</h2>
              <p className='white Center f6 ' style={{ textShadow: '2px 2px 4px #BBC9DD', color: '#D7FFFE' }} >{this.props.info}</p>


              <button
                className='pa2 pl4 pr4 grow f2 ma5 pointer mt4 bg-black tc br4 Center white'
                style={{ fontSize: '15px' }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(this.props.linkUrl);
                }}
              > View Live</button>

            </div>

          </BackSide>
        </Flippy>

      </div>
    );
  }
}

export default Projectitem;

