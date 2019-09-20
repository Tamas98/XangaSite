import React from 'react'
import Contact from '../../Components/Contact'

const Contacts = props =>{
    
    let contacts = [];

    for(let i = 0;i<props.contacts.length;i++){
        let contact = props.contacts[i];
        contacts.push(  <Contact 
                            name={contact.name} 
                            img={contact.img} 
                            address={contact.address} 
                            fax={contact.fax} 
                            phone={contact.phone} 
                            email={contact.email}
                        />
                    )
    }

    return(contacts)
}

export default Contacts