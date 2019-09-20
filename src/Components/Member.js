import React from 'react'
import Bsc from '../Containers/bsc';

const Member = props =>
<Bsc class="row" >
    <Bsc class='col'>
        <img style={{float:'left',transform:'scale(0.8)'}} src={props.profil}/>
        <div>
            <p style={{fontWeight:'bold',color:'rgb(66,79,166)',margin:'0 8rem',paddingTop:'2rem'}}>{props.name}</p>
            <p style={{fontSize: '0.7rem',fontWeight:'bold',color:'rgb(86,154,228)',margin:'0 8rem'}}>{props.position}</p>
        </div>
    </Bsc>
</Bsc>

export default Member