import React from 'react'
import Bsc from '../Containers/bsc'

const Event = props => {

    let desktop = (
<Bsc class="row" style={props.last? null :{marginBottom:'3rem'}}>
    <Bsc class="col-sm-2">
        <p>{props.year}</p>
    </Bsc>
    <Bsc class="col-sm-2" style={{margin:'0 0rem'}}>
        <div style={{padding:'1rem',backgroundColor:'rgb(218,236,253)',borderRadius:'3rem',width:'20%',position:'relative',left:'8.5px'}}>
        </div>
        {props.last ? null :
        <div class="stick">
        </div>}
    </Bsc>
    <Bsc class="col-sm-7">
        <p style={{fontSize:'0.8rem',fontWeight:'bold',color:'rgb(66,69,135)'}}>{props.event}</p>
    </Bsc>
</Bsc>)

let mobile =(
<Bsc class="row" style={props.last? null :{marginBottom:'3rem'}}>
    <Bsc class="col-sm-2" style={{margin:'0 0rem'}}>
        <div style={{top:"30px",padding:'1rem',backgroundColor:'rgb(218,236,253)',borderRadius:'3rem',width:'10%',position:'relative',left:'-50px'}}>
        </div>
        {props.last ? null :
        <div class="stick mobile">
        </div>}
    </Bsc>
    <Bsc class="col-sm-2">
        <p>{props.year}</p>
    </Bsc>
    <Bsc class="col-sm-7">
        <p style={{fontSize:'0.8rem',fontWeight:'bold',color:'rgb(66,69,135)'}}>{props.event}</p>
    </Bsc>
</Bsc>
)

return props.mobile? mobile : desktop
}
export default Event;