import React from 'react'
import bars from '../assets/XangaBars.png'
import Bsc from './bsc'

const LeftContainer = props =>              
            <Bsc class="col-sm-6" style={{backgroundColor:'rgb(237,246,255)', padding:'3rem 2rem 0 3rem'}}>
                <img style={{position:'absolute',top:'0',left:'40px',opacity: '0.03',width:'60%',height:'25%'}}src={bars}/>
                {props.children}
            </Bsc>

export default LeftContainer