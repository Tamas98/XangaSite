import bars from '../../assets/XangaBars.png'
import Bsc from '../../Containers/bsc'
import Event from '../../Components/Event';
import React from 'react';


const LeftSide = props =>{

    let timeLine=[];

    for(let i = 0;i<props.events.length;i++){
        let event=props.events[i];

        timeLine.push(
            props.events.length-1 !== i ? 
            <Event year={event.year} event={event.event} last={false}/>:
            <Event year={event.year} event={event.event} last={true}/>
            )
    }

    return(
        <Bsc id="about" class="col-sm-6" >
            <img style={{position:'absolute',top:'0',left:'40px',opacity: '0.03',width:'60%',height:'25%'}}src={bars}/>
                <h4 style={{marginBottom:'5rem',textTransform:'uppercase',color:'rgb(66,69,135)',fontWeight:'bold'}}>About Us</h4>
                <h5 style={{color:'rgb(66,69,135)',marginBottom: '2rem',fontWeight:'bold'}}>Company</h5>
                <p style={{marginBottom: '4rem',fontSize:'0.8rem',wordSpacing:"2px",lineHeight:'22.5px'}}>
                    XANGA Investment & Development Group is a private capital investment and real estate developer enterprise, 
                    offering build-to-suit solutions for its partners’ industrial and logistics activities. Its core activity 
                    is developing greenfield industrial areas equipped with high capacity public utilities and installing turnkey
                    manufacturing and logistics facilities and offices suitable for receiving high quality technology transfer.
                    During the past 2 decades  XANGA has generated and implemented a great number of investment and development
                    projects, as a result of which dozens of  foreign and local enterprises launched their business operation
                    in the city. Understanding the effects of exponential technological development and the needs of start- up
                    companies, the Group is actively involved in developing a supportive ecosystem that facilitates the 
                    start-up and growth of these businesses
                </p>
                <h5 style={{marginBottom: '4rem',color:'rgb(66,69,135)',fontWeight:'bold'}}>History</h5>
                {timeLine}
        </Bsc>
    )
}

export default LeftSide