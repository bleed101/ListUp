import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function header(props) {
    return (
        <div>
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                <Link className="nav-link"  to="/">{props.title}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

header.defaultProps ={
    title: "List Up"
}

header.propTypes={
 title: PropTypes.string   
}
