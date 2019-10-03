import React from 'react';
import Bsc from '../../Containers/bsc'
import Members from './Members';
import LeftSide from './LeftSide';
import profilPic from '../../assets/defaultProfImage.svg'
import Footer from '../../Components/Footer'

class About extends React.Component{

    state={
        members: [
            {
              profil:profilPic,
              name:'István Herdon',
              position: 'CEO',
            },
            {
              profil:profilPic,
              name:'László Herdon',
              position: 'Director',
            },
            {
              profil:profilPic,
              name:'Endre Csukás',
              position: 'Director',
            },
          ],
          events: [
            {
              year: 1997,
              event: 'Establishment of Debrecen Regional and Innovation Industrial Park.'
            },
            {
              year: 2007,
              event: '40 ha area of the industrial park in Határ street became full of enterprises.'
            },
            {
              year: 2011,
              event: 'XANGA has acquired majority shares in Airport.'
            },
            {
              year: 2017,
              event: 'XANGA no longer operates the Airport (but still a shareholder ~25%)'
            },
            {
              year: 2019,
              event: 'Bürkle construction'
            },
          ]
    }

    render(){
        return[
            <Bsc class="container" style={{margin:this.props.mobile?'0':'-13rem auto 5rem'}}>
                <Bsc class="row">
                    <LeftSide mobile={this.props.mobile} events={this.state.events}/>
                    <Members members={this.state.members}/>
                </Bsc>
            </Bsc>,
            <Footer/>
        ]
    }
}

export default About