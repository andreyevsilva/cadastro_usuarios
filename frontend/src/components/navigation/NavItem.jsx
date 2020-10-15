import './NavItem.css'
import React from 'react'

import {Link} from 'react-router-dom'

const NavItem = (props) => {
    return (
        <React.Fragment>
            <Link to={props.link}>
                <i className={`fa fa-${props.icon}  pr-2`}></i>{props.text}
            </Link>
        </React.Fragment>

    )
}

export default NavItem