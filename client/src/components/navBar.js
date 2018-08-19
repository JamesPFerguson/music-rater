import React from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar fixed-top text-left mb-5">
            <NavLink classname="NavLink px-1" to="/">Home</NavLink>
            <NavLink classname="NavLink px-1" to="/reviews/new">Add a Review</NavLink>
            </div>
        )
    }
}