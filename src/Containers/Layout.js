import React from 'react';
import NavButton from '../Components/NavButton'
import header from '../assets/subpageHeader.png'
import Home from '../Elements/Main/Home';
import About from '../Elements/About/About';
import Projects from '../Elements/Projects/ProjectsPage'
import Location from '../Elements/SubPage/SubPage'
import Locations from '../Elements/Locations/LocationsPage'
import News from '../Elements/News'
import Contact from '../Elements/ContactUs/contactUs';
import mobile_header from '../assets/mobile_header_decor.png'
import './Layout.css'
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";



const Layout = props => {

    let mobile = props.mobile

    let buttons = [];

    for(let i = 0; i < props.buttonNames.length;i++)
        buttons.push(<Link class="navButton" to={'/' + props.buttonNames[i]}><NavButton>{props.buttonNames[i]}</NavButton></Link>)
    
    let headerStyle={
        backgroundImage: 'url('+ header + ')',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height:'400px',
        padding:'1rem',
        zIndex:'2'
    }

    if(props.mobile){
        headerStyle.backgroundImage = 'none'
        headerStyle.backgroundColor = 'rgb(66,79,135)'
        headerStyle.height= '100px'

        let navButtons = [...document.getElementsByClassName('navButton')];

        navButtons.forEach(e => e.style.display='none')
    }

    let sideBar=(
        props.mobile?
        <div id="slidebar" style={{backgroundColor:'rgb(66,79,135)',overflow: 'scroll'}}>
             <Link to='/'><img style={{transform: 'scale(0.7,0.7)',marginLeft:'0'}} src={props.logo}/></Link>
            {buttons}
        </div>:<div></div>
    )

    const toggleSideBar = () =>{
        let bar = document.getElementById("slidebar").style;
        if(bar.left === '0%'){
            bar.left = '-60%';
            bar.position = 'absolute'
            document.getElementById("overlay").style.opacity = "0";
            document.getElementById("overlay").style.visibility= "invisible";
            document.getElementById("overlay").style.zIndex="-2";
        }else{
            bar.left = '0%';
            bar.position = 'fixed';
            document.getElementById("overlay").style.opacity = "0.6";
            document.getElementById("overlay").style.visibility= "visible";
            document.getElementById("overlay").style.zIndex="1";
        }

        let navButtons = [...document.getElementsByClassName('navButton')];

        navButtons.map(e => e.style.display='block')
    }

    return[
        <Router>
             {sideBar}
            {props.mobile ? <div onClick={() => document.getElementById("slidebar").style.left === '0%' ? toggleSideBar() : null } id = "overlay"></div> : null}
            <div style={headerStyle}>    
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>
                       <Link to='/'><img style={{transform: 'scale(0.6,0.6)',marginLeft:'-3rem'}} src={props.logo}/></Link>
                    </div>
                    <div style={{display: 'flex',justifyContent: 'flex-end'}}>
                        {props.mobile ? 
                        <button style={{zIndex:'99',marginTop:'.5rem',fontSize:'2rem',height:'3rem',width:'3rem',border:'none',backgroundColor:'transparent',padding:'0'}} onClick={toggleSideBar}><i className="flaticon-menu"></i></button> : 
                        buttons}
                    </div>
                </div>
            </div>
            <div>
                {props.mobile ? <img style={{width: '100%',height:'auto'}} src={mobile_header}/> : null}
            </div>
            <Switch>            
                <Route path='/' exact component={Home}/>
                <Route path='/Home'exact component={Home}/>
                <Route path='/About' render={()=><About mobile={mobile}/>}/>
                <Route path='/Projects' render={()=><Projects mobile={mobile}/>}/>
                <Route path='/Locations' exact component={Locations}/>
                <Route path='/News' exact render={() => <News mobile={mobile}/>}/>
                <Route path='/Contact Us' exact render={() => <Contact mobile={mobile}/>}/>
                <Route path='/Locations/Loc1' render={()=> <Location mobile={mobile} isProject={false} number={1}/>}/>
                <Route path='/Locations/Loc2' render={()=> <Location mobile={mobile} isProject={false} number={2}/>}/>
                <Route path='/Locations/Loc3' render={()=> <Location mobile={mobile} isProject={false} number={3}/>}/>
                <Route path='/Locations/Loc4' render={()=> <Location mobile={mobile} isProject={false} number={4}/>}/>
                <Route path='/Proj1' render={() => <Location mobile={mobile} isProject={true} number={1}/>}/>
                <Route path='/Proj2' render={() => <Location mobile={mobile} isProject={true} number={2}/>}/>
                <Route path='/Proj3' render={() => <Location mobile={mobile} isProject={true} number={3}/>}/>
                <Route path='/Proj4' render={() => <Location mobile={mobile} isProject={true} number={4}/>}/>
                <Route path='/Proj5' render={() => <Location mobile={mobile} isProject={true} number={5}/>}/>

            </Switch>
        </Router>,
        
       
           ];
}

export default Layout;