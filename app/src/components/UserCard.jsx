import React from 'react';

class UserCard extends React.Component {

    render() {

        const { user } = this.props;

        if (user) {
            return (
                <div className='UserCard'>
                    <div className='top'>
                        <div className="user-image">
                            <a href={user.html_url} target='_blank'>
                                <p className="hover-text">Github Profile &#8594;</p>
                                <img src={user.avatar_url} alt='No avatar image found' />
                            </a>
                        </div>
                    </div>
                    <div className='bottom'>
                        {user.name && <p>Name: {user.name}</p>}
                        <p>Username: {user.login}</p>
                        {user.public_repos && <p>Public Repos: {user.public_repos}</p>}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default UserCard;