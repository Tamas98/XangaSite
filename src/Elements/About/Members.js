import bg from '../../assets/refBg.png';
import Member from '../../Components/Member';
import Bsc from '../../Containers/bsc';
import React from 'react';


const Members = props =>{

    let members=[];

    for(let i = 0;i<props.members.length;i++){
        let member = props.members[i];
        members.push(<Member name={member.name} profil={member.profil} position={member.position}/>)
    }

    return(
        <Bsc class="col-sm-5" style={{backgroundColor:'white',backgroundImage:'url(' + bg + ')',backgroundPosition:'bottom',backgroundRepeat:'no-repeat',boxShadow:'2px 2px 5px gray',padding:'4rem 3rem'}}>
            <h4 style={{textTransform:'uppercase',color:'rgb(66,69,135)',fontWeight:'bold'}}>Our Team</h4>
            {members}
        </Bsc>
    )
}

export default Members