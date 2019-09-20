import React from 'react'
import Location from '../../Components/Location';
import map from '../../assets/debrecenMapAndMarkers.png';
import Bsc from '../../Containers/bsc';
import Footer from '../../Components/Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





const Locations = props =>{
    
    let locations =  [];

    for(let i = 0; i < props.locations.length;i++){
        let location = props.locations[i]
        locations.push(
        <Link to={'/Locations/Loc'+(i+1)}>    
            <Location img={location.image} marker={location.marker} text={location.text}/>
        </Link> 
        )
    }
    
    let titleStyle={
        fontSize:'1.5rem',
        color:'rgb(45,55,100)',
        textTransform:'uppercase',
        fontWeight:'bold',
        letterSpacing:"1px"
    }

    
    let locStyle={
        backgroundColor: 'rgb(237,246,255)',
    }

    let imgStyle={}

    if(window.location.href.includes('/Locations')){
        locStyle={
            ...locStyle,
            margin:'-20rem 0 0',
            paddingTop:'8rem',
            zIndex:'-1',
            position:'absolute'
        }
        titleStyle={
            display:'none'
        }
    }
    
    return(
        <div style={locStyle}>
        <Bsc class="container-fluid" >
            <Bsc class="row">
                <Bsc class="col" style={{textAlign:'center',marginTop: '4rem'}}>
                    <p style={titleStyle}>Locations</p>
                </Bsc>
            </Bsc>
            <Bsc class="row">
                <Bsc class="col-xl-6" style={{paddingTop:'5rem',display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                    {locations}
                </Bsc>
                <Bsc class="col-xl-6" style={{textAlign:'center'}}>
                    <img style={imgStyle} src={map}/>
                </Bsc>
            </Bsc>
        </Bsc>
        {window.location.href.includes('/Locations') ? <Footer/> : null}
        </div>
        
    )
}

export default Locations