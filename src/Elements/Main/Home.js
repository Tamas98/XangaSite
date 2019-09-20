import React from 'react'

import Header from './Header'
import Awards from './Awards'
import References from './References';
import Locations from '../Locations/LocationsPage';
import Footer from '../../Components/Footer'


import award from '../../assets/laurel.png'
import cola from '../../assets/cola_logo.png';
import ricged from '../../assets/rg_logo.png';
import ni from '../../assets/ni_logo.png';
import shael from '../../assets/shaelfer_logo.png';


class Home extends React.Component{
    
    state={
        awards: [
            {
              image: award,
              title: 'Hipa',
              for: 'Industrial park of the year',
              who: 'Debreceni Regionális és innovációs Tudományos Technológiai Park'
            },
            {
              image: award,
              title: 'Hipa',
              for: 'Industrial park of the year',
              who: 'Debreceni Regionális és innovációs Tudományos Technológiai Park'
            },
            {
              image: award,
              title: 'Hipa',
              for: 'Industrial park of the year',
              who: 'Debreceni Regionális és innovációs Tudományos Technológiai Park'
            },
            {
              image: award,
              title: 'Hipa',
              for: 'Industrial park of the year',
              who: 'Debreceni Regionális és innovációs Tudományos Technológiai Park'
            },
            {
              image: award,
              title: 'Hipa',
              for: 'Industrial park of the year',
              who: 'Debreceni Regionális és innovációs Tudományos Technológiai Park'
            }
          ],
        references: [cola,ricged,ni,shael,cola,shael,ricged,ni,ricged],
    }

    render(){   
        return [
                <Header/>,
                <Locations/>,
                <Awards awards={this.state.awards}/>,
                <References references={this.state.references}/>,
                <Footer/>
        ]
    }
};

export default Home