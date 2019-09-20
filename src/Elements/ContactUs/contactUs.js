import React from 'react'
import Bsc from '../../Containers/bsc'
import Contacts from './Contacts'
import Footer from '../../Components/Footer'

import flight from '../../assets/Flight circle.png'
import office from '../../assets/office_circle.png'
import gear1 from '../../assets/gear circle 1.png';
import gear2 from '../../assets/gear circle 2.png'
import bars from '../../assets/XangaBars.png'
import map from '../../assets/debrecenMapAndMarkers.png'

class contactUs extends React.Component{

    state={
        contacts:[
            {
                name:'Startup incubator',
                img: office,
                address: 'Hungary, 4025 Debrecen, Simonffy str. 4-6.',
                fax: '+36 (52) 534-951',
                phone: '+36 (52) 534-950',
                email: 'info[at]xanga[dot]hu'
            },
            {
                name:'REGIONAL AND INNOVATION SCIENCE AND TECHNOLOGY',
                img: gear1,
                address: 'Hungary, 4031 Debrecen, Határ street 1.',
                fax: '-',
                phone: '-',
                email: 'info[at]xanga[dot]hu'
            },
            {
                name:'AIRPORT BUSINESS PARKr',
                img: gear2,
                address: 'Hungary, 4225 Debrecen, Mikepércsi str. 51.',
                fax: '-',
                phone: '-',
                email: 'info[at]xanga[dot]hu'
            },
            {
                name:'SOUTHERN INDUSTRIAL PARK',
                img: flight,
                address: 'Hungary, 4031 Debrecen, Határ street 1.',
                fax: '-',
                phone: '-',
                email: 'info[at]xanga[dot]hu'
            }
        ]
    }

    render(){
        return[
            <Bsc class='container' style={{backgroundColor:this.props.mobile?null:'rgb(237,246,255)', padding:this.props.mobile?'0':'3rem 6rem 0 3rem',marginBottom:this.props.mobile?'0':'4rem',marginTop:this.props.mobile?'-2rem':'-13rem'}}>
                <Bsc class='row' style={{padding:this.props.mobile?'2rem':'0'}}>
                    <Bsc class="col">
                        {this.props.mobile?null:<img style={{position:'absolute',top:'-50px',right:'20px',opacity: '0.03',width:'40%',height:'70%'}}src={bars}/>}
                        <h4 style={{marginBottom:'5rem',textTransform:'uppercase',color:'rgb(66,69,135)',fontWeight:'bold'}}>Contact Us</h4>
                        <Bsc class="row">
                            <Bsc class="col-sm-5" style={{marginBottom:'4rem'}}>
                                <h5 style={{color:'rgb(66,69,135)',fontWeight:'bold'}}>Email</h5>
                                <p>info@xanga.hu</p>
                            </Bsc>
                            <Bsc class="col-sm-5">
                                <h5 style={{color:'rgb(66,69,135)',fontWeight:'bold'}}>LinkedIn</h5>
                                <p>https://www.linkedin.com/company/xanga-investment-development-group</p>
                            </Bsc>
                        </Bsc>
                        {this.props.mobile? null :<div style={{width:'100%',margin:'5rem 0',padding:'0.03rem',backgroundColor:'rgb(218,236,253)'}}></div>}
                    </Bsc>
                </Bsc>
                <div style={{backgroundColor:this.props.mobile?'rgb(237,246,255)':null}}>
                    <Bsc class="row" style={{marginBottom:'5rem',padding:this.props.mobile?'4rem':'0'}}>
                        {this.props.mobile?<img style={{position:'absolute',top:'550px',left:'0',opacity: '0.03',width:'100%',height:'30%'}}src={bars}/>:null}
                        <Contacts contacts={this.state.contacts}/>
                    </Bsc>
                    {this.props.mobile ? <img style={{padding:'0'}} src={map}/>: 
                    <div style={{overflow:'hidden',backgroundImage:'url(' + map + ')',backgroundPosition:'center',height:'45rem',width:'90%',marginLeft:'5rem'}}>

                    </div>}
                </div>
            </Bsc>,
            <Footer/>
        ]
    }
}

export default contactUs