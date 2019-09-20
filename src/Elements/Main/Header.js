import React from 'react'
import homeHeader from '../../assets/mobile_header_image.png'
import Bsc from '../../Containers/bsc';


const Header = props =>
    <Bsc id='intro' class="container-fluid">
        <Bsc class="row" >
            <Bsc id="introText" class="col-xl-5" >
                <p style={{fontSize: '2.5rem',fontWeight:'bold',margin:'0'}}>Xanga</p>
                <p style={{fontSize: '1.5rem',fontWeight:'bold',margin:'0'}}>Investment and development</p>
                <p style={{fontSize: '1rem',fontWeight:'bold',margin:'0'}}>group</p><br/>
                <span style={{color: 'rgb(45,55,100)'}}><b>20 years' proven</b> reference in build-to-suit industrial logistic and service facility development</span>
            </Bsc>
            <Bsc class="col-xl-5">
                <img  src={homeHeader}/>
            </Bsc>
        </Bsc>
    </Bsc>

export default Header