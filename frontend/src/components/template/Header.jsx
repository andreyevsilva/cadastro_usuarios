import './Header.css'
import React from 'react'

const Header = (props) => {
    return (
        /**Para celular o header não aparece, e se for do tipo sm ele usa o display: flex
         * dispositio=> medio extra, grande
         */
        <header className="header d-none d-sm-flex flex-column">
            <h1 className='mt-3'>
                <i className={`fa fa-${props.icon}`}></i> {props.title}
            </h1>
            <p className="lead text-muted">{props.subtitle}</p>
        </header>
    )
}

export default Header;