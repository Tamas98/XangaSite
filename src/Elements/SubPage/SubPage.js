import React from 'react'
import Footer from '../../Components/Footer'
import Bsc from '../../Containers/bsc'
import bars from '../../assets/XangaBars.png'
import Datas from './Datas'
import OtherLoc from '../../Components/OtherLoc'

import img1 from '../../assets/workImage1.png'
import img2 from '../../assets/workImage3.png'
import img3 from '../../assets/workImage5.png'
import map from '../../assets/mapSubPage.png'

import flightmarker from '../../assets/Flight marker.png'
import blueGear from '../../assets/gear marker 1.png'
import gearMarker from '../../assets/gear marker 2.png'
import '../../assets/fb_icon/font/flaticon.css'

class Loc extends React.Component{

    state={
        titles: this.props.isProject ? 
        ['Production Unit', 'Cargo and Logistic Base','Coca-Cola HBC Regional Logistic Centre','Innovation and Incubator Centre','Service Centre']:
        ['Debrecen Regional Innovation Science and Techonlogy Park','Start-up incubator','Debrecen International Airport Multimodal Logistics Center','Sourthen Industrial Park'],
        
        markers: this.props.isProject?
            [<i style={{position:'relative',top:this.props.mobile?'-140px':'-180px',left:this.props.mobile?'195px':'178px',fontSize:this.props.mobile?'2rem':'4rem',color:'midnightblue'}} className='flaticon-marker'></i>]:
        [
            <img style={{position:'relative',top:this.props.mobile?'-135px':'-297px',left:'100px',transform:this.props.mobile?'scale(0.5)':'scale(0.7)'}} src={blueGear}/>,
            <img style={{position:'relative',top:this.props.mobile?'-145px':'-160px',left:'225px',transform:'scale(0.5)'}} src={gearMarker}/>,
            <img style={{position:'relative',top:this.props.mobile?'-175px':'-187px',left:'178px',transform:'scale(0.5)'}} src={flightmarker}/>,
            null
        ],
        locData: this.props.isProject? 
        [
            {
                title:'Location',
                text:'Debrecen International Airport'
            },
            {
                title:'Total building size',
                text:'50.000sqm'
            },
            {
                title:'Volume of investment',
                text:'30 million EUR'
            },
            {
                title:'Type',
                text:'Logistics Hall'
            }
        ]
        :
        [
            {
                title: 'Size',
                text: '130 ha'
            },
            {
                title: 'History',
                text: 'Debrecen Regional and Innovation Industrial Park  was established by the Municipality of Debrecen in 1997 with the aim of providing - as a greenfield investment - a modern industrial environment equipped with high capacity public utilities and access roads in Debrecen. Within the framework of the first phase of the development, a 40 ha area was equipped with high capacity public utilities between 2000 and 2002.\n'
                + 
                '\nThe extension of the park with an additional 20 ha was realised within the framework of the sole investment and complete management of DIPA Debrecen Industrial Park Academy Ltd, member of the XANGA Group, in 2008.\n'
                +          
                '\nSince then, the area of the industrial park has been further extended. Currently, the total area of the park reaches 130 ha, of which ca. 40 ha is still to be filled with industrial facilities. Currently, XANGA is building the road and public utilities of a 20 ha area. The area of the park can further be extende d.'            
            },
            {
                title: 'Planned developments/expansions',
                text: 'Bürkle'
            },
            {
                title: 'Projects',
                text: '36 companies with more than 5000 employees .'
            }
        ]
    }

    render(){

        let contStyle;

        this.props.isProject ?
        contStyle={
            backgroundColor:'rgb(237,246,255)', 
            padding:'3rem 2rem 0 3rem',
            maxHeight:'50rem'
        } : 
        contStyle={
            backgroundColor:'rgb(237,246,255)', 
            padding:'3rem 2rem 0 3rem'
        }
        

        return[
            <Bsc class="container" style={{marginBottom:'4rem',marginTop:this.props.mobile?'0':'-13rem'}} >
                <Bsc class="row">                
                    <Bsc class="col-sm-6" style={contStyle}>
                        <img style={{position:'absolute',top:'0',left:'40px',opacity: '0.03',width:'60%',height:'25%'}}src={bars}/>
                        <h4 style={{textTransform:'uppercase',color:'rgb(66,69,135)',fontWeight:'bold',fontSize:'1.3rem',lineHeight:'2rem'}}>{this.state.titles[this.props.number-1]}</h4>
                        <div style={{width:'100%',margin:'2rem 0',padding:'0.03rem',backgroundColor:'rgb(209,216,256)'}}></div>
                        <Datas data={this.state.locData}/>
                        <div>
                            <img src={map}/>
                            {this.state.markers[this.props.isProject ? 0 : this.props.number-1]}
                        </div>
                    </Bsc>
                    <Bsc id="workimgs" class='col-sm-6'>
                        <img src={img1}/>
                        <img src={img2}/>
                        <img src={img3}/>
                    </Bsc>
                </Bsc>
                <div style={{width:'100%',margin:'2rem 0',padding:'0.03rem',backgroundColor:'rgb(209,216,256)'}}></div>
                <Bsc class="row" >
                    <Bsc class="col" style={{display:'flex',justifyContent:'center'}}>
                        <p style={{color:'midnightblue',fontWeight:'bold',fontSize:"1.2rem"}}>Other Locations</p>
                    </Bsc>
                </Bsc>
                <Bsc class="row" style={{display:'flex',justifyContent:'center'}}>                        
                    <OtherLoc to={(this.props.isProject ? 'Proj' : '/Locations/Loc') + (this.props.number-1<=0 ? this.props.number+2 : this.props.number-1)} name={this.state.titles[this.props.number-2<0 ? this.props.number+1 : this.props.number-2]}/>
                    <OtherLoc  to={(this.props.isProject ? 'Proj' : '/Locations/Loc') + (this.props.number>=this.state.titles.length ? this.props.number-2 : this.props.number+1)} name={this.state.titles[this.props.number>=this.state.titles.length ? this.props.number-3 : this.props.number]}/>
                </Bsc>     
            </Bsc>,
            <Footer/>
        ]
    }
}

export default Loc