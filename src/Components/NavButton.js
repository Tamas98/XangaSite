import React from 'react'
import Radium from 'radium'

let buttonStyle={
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    textTransform: 'uppercase',
    margin: '1.5rem',
    padding: 0,
    fontSize:'1rem',
    transition: 'all 1s ease 0s',

    ':hover':{
        fontSize: '1.2rem',
        textShadow: '10px 10px 5px black'
    }
}

const NavButton = props => {
    return(<div className={props.size}>
                <button style={buttonStyle} className={props.class}>{props.children}</button>
            </div>);
}

export default Radium(NavButton)