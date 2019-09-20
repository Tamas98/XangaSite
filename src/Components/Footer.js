import React from 'react'
import logo from '../assets/logoWhite.png';


const Footer = () =>
<div style={{textAlign:'center',width: '100%',backgroundColor:"rgb(46,55,101)",paddingTop: '2rem'}}>
    <p style={{fontSize: '0.6rem',color:'white',textTransform:'uppercase',fontWeight:'italic',margin:'0'}}>Xanga 2019</p>
    <img style={{transform: 'scale(0.4,0.4)'}} src={logo}/>
</div>

export default Footer