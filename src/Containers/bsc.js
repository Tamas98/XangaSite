//BootStrapContainer(bsc)
import React from 'react'


const bsc = props =>
<div id={props.id} className={props.class} style={props.style}>
    {props.children}
</div>

export default bsc