import React from 'react'
import referenceBg from '../../assets/refBg.png'
import Bsc from '../../Containers/bsc';


const References = props => {
 
    let references = [];

    for(let i = 0;i<props.references.length;i++){
        references.push(
            <Bsc class='col-sm-4'>
                <img style={{boxShadow:'7.5px 7.5px 5px lightgray',margin:'1rem'}} src={props.references[i]}/>
            </Bsc>
        )
    }

    return(
        <Bsc class="container-fluid" style={{textAlign:'center',backgroundImage:'url(' + referenceBg + ')',backgroundSize: '100% 100%',backgroundRepeat:'no-repeat'}}>
            <Bsc class="container">
                <Bsc class="row">
                    <Bsc class="col" style={{textAlign:'center',marginTop: '7rem',marginBottom: '3rem'}}>
                        <p style={{fontSize:'1.5rem',color:'rgb(45,55,100)',textTransform:'uppercase',fontWeight:'bold',letterSpacing:"1px"}}>References</p>
                    </Bsc>
                </Bsc>
                <Bsc class="row" style={{paddingBottom: '5rem'}}>
                    {references}
                </Bsc>
            </Bsc>
        </Bsc>
    )
}
export default References