import React from 'react'
import Projects from './Projects'
import Bsc from '../../Containers/bsc'
import Footer from '../../Components/Footer'

import office from '../../assets/loc1.jpg'
import city1 from '../../assets/workImage2.png'
import city2 from '../../assets/workImage3.png'
import airport from '../../assets/workImage5.png'
import bg from '../../assets/XangaBars.png'

class ProjectsPage extends React.Component{
    
    state={
        projects: [
            {
                name: 'Production Unit',
                img: office,
                type: 'Industrial Hall',
                price: '10',
                industrie: 'Dip Invest Ltd.',
                year: '2014'
            },
            {
                name: 'Cargo and Logistic Base',
                img: city1,
                type: 'Logistic Hall',
                price: '30',
                industrie: 'Saigo Port Ltd.',
                year: '2015'
            },
            {
                name: 'Coca-Cola HBC Regional Logistic Centre',
                img: airport,
                type: 'Logistic Hall',
                price: '2',
                industrie: 'XANGA Service Ltd.',
                year: '2008'
            },
            {
                name: 'Innovation and Incubator Centre',
                img: city2,
                type: 'Office Building',
                price: '5',
                industrie: 'Saigo Logistic Ltd.',
                year: '2014'
            },
            {
                name: 'Service Centre',
                img: city1,
                type: 'Office Building',
                price: '3',
                industrie: 'Xstage Ltd.',
                year: '2014'
            },
        ]
    }

    render(){
        return[
            <Bsc class='container' style={{padding:this.props.mobile?'2rem':'4rem',backgroundColor: this.props.mobile? null: 'rgb(237,246,255)',zIndex:'3',paddingBottom:'4rem',margin:'-13rem auto 3rem'}}>
                
                <Bsc class="row">
                {this.props.mobile?<div style={{height:'10rem'}}></div>:     
                    <Bsc class="col" >
                        <img style={{position:'absolute',top:'0',left:'40px',opacity: '0.03',width:'40%',height:'15%'}} src={bg}/>
                        <h4 style={{textTransform:'uppercase',color:'rgb(66,69,135)',fontWeight:'bold'}}>Projects</h4>
                        <div style={{width:'100%',padding:'0.03rem',backgroundColor:'rgb(209,216,256)',margin:'2.5rem 0 2.5rem'}}></div>
                    </Bsc>
                }
                </Bsc>
                <div className="row" id="projects" style={{display:'flex',flexWrap:'wrap'}}>
                    <Projects projects={this.state.projects}/>
                </div>
            </Bsc>,
            <Footer/>
        ]
    }
}

export default ProjectsPage