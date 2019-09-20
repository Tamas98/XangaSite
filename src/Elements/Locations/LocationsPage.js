import React from 'react'
import Locations from './Locations'
import loc1 from '../../assets/loc1.jpg';
import gear1 from '../../assets/gear circle 1.png';
import loc2 from '../../assets/workImage1.png';
import gear2 from '../../assets/gear circle 2.png'
import loc3 from '../../assets/workImage2.png';
import marker1 from '../../assets/office_circle.png'
import loc4 from '../../assets/workImage3.png';
import marker2 from '../../assets/Flight circle.png';

class LocationPage extends React.Component{

    state = {
    locations:[
        {
          image: loc1,
          marker: marker1,
          text: "Start-up incubator"
        },
        {
          image: loc3,
          marker: gear1,
          text: "Debrecen Regional Innovation Science and Techonlogy Park"          
        },
        {
          image: loc4,
          marker:  gear2,
          text: "Sourthen Industrial Park"
        },
        {
          image: loc2,
          marker: marker2,
          text: "Debrecen International Airport Multimodal Logistics Center"
        },
      ]
    }

    render(){
        return(<Locations locations={this.state.locations}/>)
    }
}

export default LocationPage