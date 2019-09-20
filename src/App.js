import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './Containers/Layout';
import logo from './assets/logoWhite.png';
import './assets/icons/font/icons.css'


class App extends React.Component {
  state={
    isMobile: window.innerWidth <= 900,
    buttons: ["Home","About","Locations","Projects","News","Contact Us"],
    update: false
  }

  resizeHandler = () =>{
    this.setState({isMobile: window.innerWidth<=900})
  }
  

  render(){
    
    window.addEventListener("resize",this.resizeHandler)

  return (
      <div>
        <Layout logo={logo} mobile={this.state.isMobile} buttonNames={this.state.buttons}/>
      </div>
    );
  }
}

export default App;
