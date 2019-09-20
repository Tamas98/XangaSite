import React from 'react'
import '../assets/icons/font/icons.css'

let markerStyle={
    transform: 'scale(0.5,0.5)',
    position: 'absolute',
    left: '0',
    top: '-50px'
}

const Location = props =>

    <div class="location">
        <img style={{width:'18rem',height:"10rem"}} src={props.img}/>
        <div style={{height:'6rem',padding:'2rem 2rem',backgroundColor:'rgb(66,79,135)',position:'relative',}}>
            <img style={markerStyle} src={props.marker}/>
            <p style={{fontSize:'0.7rem',color:'whitesmoke'}}>{props.text}</p>
            <div style={{position:'absolute',bottom:'0',right:'0',marginRight:'0.5rem'}}>
                <button style={{backgroundColor:"transparent",border:'none',color:'whitesmoke',fontSize:'2rem'}}>
                    <i style={{fontSize:'1.2rem'}} className="flaticon-arrow"></i> 
                </button>
            </div>
        </div>
    </div>
    
export default Location;