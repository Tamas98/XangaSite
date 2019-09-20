import React from 'react'

const Contact = props =>
<div className="col-sm-3" style={{marginBottom:'2rem'}}>
    <div style={{display:'flex',justifyContent:'center',padding:'2rem',backgroundColor:'midnightblue',color:'white',height:'80px',textAlign:'center'}}>
        <p style={{textTransform:'uppercase',fontWeight:'bold',fontSize:'0.7rem',display:'flex',alignItems:'center'}}>{props.name}</p>
    </div>
    <img style={{position:'absolute',margin:'-3rem 4rem 0',transform:'scale(0.5)'}} src={props.img}/>
    <div style={{backgroundColor:'white',padding:'3rem',paddingLeft:'1.5rem',paddingBottom:'1rem'}}>
        <p style={{fontSize:'0.7rem',fontWeight:'bold'}}>{props.address}</p>
        
        <p class="titles">Fax</p>
        <p class="desc">{props.fax}</p>
        
        <p class="titles">Phone</p>
        <p class="desc">{props.phone}</p>
        
        <p class="titles">Email</p>
        <p class="desc">{props.email}</p>

    </div>
</div>

export default Contact