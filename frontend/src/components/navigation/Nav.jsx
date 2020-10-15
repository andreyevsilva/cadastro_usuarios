import './Nav.css'
import React from 'react'

import NavItem from './NavItem'

const Nav = (props) => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <NavItem link="/" icon="home" text="Início"/>
                <NavItem link="/users" icon="users" text="Usuários"/>
            </nav>
        </aside>
    )
}

export default Nav