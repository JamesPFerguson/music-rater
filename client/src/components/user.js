import React from 'react';

export default class User extends React.Component {

    render() {
        return (
            <div className="user">
            <a href={`/users/${this.props.user.id}`}>{this.props.user.username}</a>
            </div>
        )
    }
}