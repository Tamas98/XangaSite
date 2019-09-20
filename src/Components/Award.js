import React from 'react'

let imgStyle={
    opacity: '0.1',
    transform: 'scale(0.3)',
}

const Award = props => 
<div  id="awards" className="col-sm-5">
    <div id="awardLogo">
        <img style={imgStyle}src={props.img}/>
        <p style={{top:'55px',textTransform:'uppercase'}}>{props.title}</p>
        <p style={{fontWeight:'bold',top:'85px',letterSpacing:'0.5px'}}>{props.for}</p>
    </div>
    <div style={{margin: '0 15%',width:'70%',textAlign:'center',borderBottom: '1px solid rgb(77,90,161)'}}></div>
    <p style={{margin:'1.25rem 0',fontSize:'0.6rem',letterSpacing:'0.5px'}}>{props.who}</p>
    <div style={{margin: '0 15%',width:'70%',borderTop: '1px solid rgb(77,90,161)'}}></div>
</div>

export default Award