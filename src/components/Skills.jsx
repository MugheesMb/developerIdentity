import React from 'react'
import './skills.css';
import 'antd/dist/antd.css';

import { Progress } from 'antd';
import m1 from './images/m1.svg';
import { sampleData } from '../data/skillsData';



class Skills extends React.Component {

    state = {
        events: sampleData,

    }

    render() {


        return (
            <div className='skills '  >

                <h1 className='tex'  > ♛ Skills ♕ </h1>

                <h1 className='tex'    >I love to create things with Cutting edge technologies..!<span role="img" aria-label="laptop"> 💻</span> </h1>

                <div className='ant-row'>
                    {this.state.events.map(ski => (

                        <div key={ski.id} >
                            <h2 style={{ color: 'whitesmoke' }} className={ski.icon}>{ }</h2> <i>{ski.title}</i>
                            <div className='bar'   >
                                <Progress percent={ski.barloading} status="active" strokeColor={
                                    '#4cff00'}
                                    strokeWidth={13
                                    } showInfo={false} /><span className='f5' >  {ski.percent}%</span>
                            </div>
                        </div>

                    ))}



                </div>
            </div>
        )
    }
}

export default Skills;


