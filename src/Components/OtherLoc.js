import React from 'react'
import { Link } from "react-router-dom";

const OtherLoc = props =>
<div className="col-sm-4" style={{width:"20rem",height:'8rem',boxShadow:'3px 3px 8px skyblue',margin:'2rem',display:'flex',alignItems:'flex-end',justifyContent:'space-between'}}>
    <div style={{position:'absolute',left:'20px',top:'20px'}}>{props.name}</div>
    <Link to={props.to}>
        <p style={{
            position:'absolute',
            right:'0',
            bottom:'0',
            margin:'0',
            color:'white',
            backgroundColor:"midnightblue",
            padding:'0.25rem',
            fontSize:'0.7rem',
            border:'none',
            width:"6rem",
            height:'2rem',
            fontWeight:'bold',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'}}>
            More
            <i style={{marginLeft:'25px',fontSize:'1rem'}} className="flaticon-arrow"></i> 
        </p>
    </Link>
</div>

export default OtherLoc