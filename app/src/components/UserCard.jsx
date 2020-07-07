import React from 'react';

class UserCard extends React.Component {

    render() {

        const { user } = this.props;

        return (
            <div className='UserCard'>
                <div className='left'>
                    <div className="user-image">
                        <a href={user.html_url}>
                            <img src={user.avatar_url} alt='No avatar image found' />
                        </a>
                    </div>
                </div>
                <div className="right">
                    <h2>Name: {user.name ? user.name : <em>Not set</em>}</h2>
                    <h2>Username: {user.login}</h2>
                    <h2>Public Repos: {user.public_repos}</h2>
                </div>
            </div>
        );
    }
}

export default UserCard;