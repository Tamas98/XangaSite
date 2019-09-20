import React from 'react'
import awardBg from '../../assets/awardBg.png';
import Award from '../../Components/Award'
import Bsc from '../../Containers/bsc';


const Awards = props => {
    
    let awards = [];

    for(let i = 0;i<props.awards.length;i++){
        let award = props.awards[i]
        awards.push(<Award img={award.image} title={award.title} for={award.for} who={award.who}/>)
    }
    
    return(
        <Bsc class="container-fluid" style={{backgroundImage:'url(' + awardBg + ')',backgroundSize:'100% 100%',backgroundColor:'rgb(53,63,113)',backgroundRepeat:'no-repeat',backgroundPosition:'bottom'}}>
            <Bsc class="container">
                <Bsc class="row">
                    <Bsc class="col" style={{textAlign:'center',margin: '8rem 0 2rem 0'}}>
                        <p style={{fontSize:'1.5rem',color:'white',fontWeight:'bold',textTransform:'uppercase'}}>Awards</p>
                    </Bsc>
                </Bsc>
                <Bsc id="awardPanel" class="row" style={{display:'flex',flexWrap:'wrap'}} >
                    {awards}
                </Bsc>
            </Bsc>
        </Bsc>
    )
}

export default Awards