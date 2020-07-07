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
    userData: {
      "login": "drew-ross",
      "id": 62345438,
      "node_id": "MDQ6VXNlcjYyMzQ1NDM4",
      "avatar_url": "https://avatars2.githubusercontent.com/u/62345438?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/drew-ross",
      "html_url": "https://github.com/drew-ross",
      "followers_url": "https://api.github.com/users/drew-ross/followers",
      "following_url": "https://api.github.com/users/drew-ross/following{/other_user}",
      "gists_url": "https://api.github.com/users/drew-ross/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/drew-ross/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/drew-ross/subscriptions",
      "organizations_url": "https://api.github.com/users/drew-ross/orgs",
      "repos_url": "https://api.github.com/users/drew-ross/repos",
      "events_url": "https://api.github.com/users/drew-ross/events{/privacy}",
      "received_events_url": "https://api.github.com/users/drew-ross/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Drew Ross",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 39,
      "public_gists": 0,
      "followers": 4,
      "following": 11,
      "created_at": "2020-03-18T15:10:49Z",
      "updated_at": "2020-07-07T19:39:19Z"
    },
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
        <header>
          <h1>Github User Card</h1>
        </header>
        <div className="container-main">
          <div>
            <h2>Selected User</h2>
            <UserCard user={this.state.userData} />
          </div>
          <div>
            <h2>Followers</h2>
            <UserCardList followers={this.state.followersData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
