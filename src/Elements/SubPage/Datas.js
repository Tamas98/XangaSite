import React from 'react'

const Datas = props =>{
    
    let datas = [];

    for(let i = 0;i<props.data.length;i++){
        let data = props.data[i]
        datas.push(
            <div style={{margin:'1rem'}}>
                <p  style={{color:'midnightblue',fontWeight:'bold',fontSize:'1.1rem',marginBottom:'0.5rem'}}>{data.title}</p>
                <p style={{marginBottom:'2rem',fontSize:'.8rem'}}>{data.text}</p>
            </div>
        )
    }


    return(
        <div id="data">
            {datas}
        </div>
    )
}

export default Datas