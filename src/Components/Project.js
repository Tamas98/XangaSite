import React from 'react'
import Bsc from '../Containers/bsc';
import Radium from 'radium'

let pStyle={
    margin:'0',
    fontWeight:'bold',
    color:'rgb(42,50,94)'
}

const Project = props => 
    <Bsc style={{margin:'1rem 1rem',width:"315px"}}>
        <div style={{height:'88px',display:'flex',justifyContent:'center',backgroundColor:'rgb(66,79,135)',padding:'2rem',textAlign:'center',color:'white',fontWeight:'bold',alignItems:'center'}}>{props.name}</div>
        <div style={{position:'relative'}}>
            <img style={{height:'205px',width:'315px'}} src={props.img}/>
            <div style={{position:'absolute',bottom:'0',left:'0',color:'white',padding:'0.2rem 2rem',backgroundColor:'rgb(86,103,205)',fontSize:'0.6rem',borderRadius:'0 100px 0 0',fontWeight:'bold'}}>{props.type}</div>
        </div>
        <div style={{backgroundColor:'white',padding:'1rem 0 0 2rem'}}>
            <p style={{...pStyle,fontSize:'.9rem'}}>{props.price} million EUR</p>
            <p style={{...pStyle,fontSize:'.8rem',color:'rgb(42,92,157)'}}>{props.industrie}</p>
            <p style={{fontSize:'.7rem'}}>{props.year}.</p>
            <div style={{padding:'0.05rem',backgroundColor:'rgb(237,246,255)'}}></div>
            <div style={{textAlign:'right',margin:'1rem',marginTop:'0'}}>
                <i style={{color:'rgb(66,79,135)',fontSize:'1.5rem'}} className="flaticon-arrow"></i>
            </div>
        </div>
    </Bsc>

export default Radium(Project)