import React from 'react';

export default class User extends React.Component {

    render() {
        return (
            <span>
            <span className="user">{this.props.user.username} </span>
            </span>
        )
    }
}