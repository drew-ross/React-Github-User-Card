import React from 'react';
import UserCard from './UserCard';

class UserCardList extends React.Component {

    render() {

        const { followers } = this.props;

        return (
            <div className='UserCardList'>
                <div className='container-small-card'>
                    {followers && followers.map(user => <UserCard key={user.id} user={user} />)}
                </div>
            </div>
        );
    }
}

export default UserCardList;