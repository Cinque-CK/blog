import React from 'react';
import './header.css'

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="header-comp">
                BLOG MANAGE            
            </div>
        )
    }
}

export default Header;