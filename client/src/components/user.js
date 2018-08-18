import React from 'react';

export default class User extends React.Component {

    render() {
        return (
            <span className="user">
            {/* <a href={`/users/${this.props.user.id}`}> */}
                {this.props.user.username}
            {/* </a> */}
            </span>
        )
    }
}