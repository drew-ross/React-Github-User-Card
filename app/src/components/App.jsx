import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import UserCardList from './UserCardList';

//constants
const API_URL = 'https://api.github.com/users/';
const USER = 'drew-ross';
const FOLLOWERS = '/followers';
// https://api.github.com/users/drew-ross  /followers

class App extends React.Component {
  state = {
    userData: {},
    followersData: [
      {
        "login": "mrzacsmith",
        "id": 8953340,
        "node_id": "MDQ6VXNlcjg5NTMzNDA=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/8953340?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mrzacsmith",
        "html_url": "https://github.com/mrzacsmith",
        "followers_url": "https://api.github.com/users/mrzacsmith/followers",
        "following_url": "https://api.github.com/users/mrzacsmith/following{/other_user}",
        "gists_url": "https://api.github.com/users/mrzacsmith/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mrzacsmith/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mrzacsmith/subscriptions",
        "organizations_url": "https://api.github.com/users/mrzacsmith/orgs",
        "repos_url": "https://api.github.com/users/mrzacsmith/repos",
        "events_url": "https://api.github.com/users/mrzacsmith/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mrzacsmith/received_events",
        "type": "User",
        "site_admin": false
      },
      {
        "login": "Impulse2020",
        "id": 23302410,
        "node_id": "MDQ6VXNlcjIzMzAyNDEw",
        "avatar_url": "https://avatars2.githubusercontent.com/u/23302410?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Impulse2020",
        "html_url": "https://github.com/Impulse2020",
        "followers_url": "https://api.github.com/users/Impulse2020/followers",
        "following_url": "https://api.github.com/users/Impulse2020/following{/other_user}",
        "gists_url": "https://api.github.com/users/Impulse2020/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Impulse2020/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Impulse2020/subscriptions",
        "organizations_url": "https://api.github.com/users/Impulse2020/orgs",
        "repos_url": "https://api.github.com/users/Impulse2020/repos",
        "events_url": "https://api.github.com/users/Impulse2020/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Impulse2020/received_events",
        "type": "User",
        "site_admin": false
    }
    ]
  };

  componentDidMount() {
    // axios.get(`${API_URL}${USER}`)
    //   .then(res => {
    //     this.setState({
    //       ...this.state,
    //       userData: res.data
    //     });
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div className="container-main-card">
          <UserCard user={this.state.userData} />
          <UserCardList followers={this.state.followersData} />
        </div>
      </div>
    );
  }
}

export default App;
