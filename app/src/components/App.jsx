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
    userData: null,
    followerData: []
  };

  componentDidMount() {
    axios.get(`${API_URL}${USER}`)
      .then(res => {
        this.setState({
          ...this.state,
          userData: res.data
        });
      })
      .catch(err => console.log(err));
    axios.get(`${API_URL}${USER}${FOLLOWERS}`)
      .then(res => {
        this.setState({
          ...this.state,
          followerData: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        
        <header>
          <h1>Github User Card</h1>
        </header>

        {this.state.userData
          ?
          <div className="container-main">
            <div>
              <h2>Selected User</h2>
              <UserCard user={this.state.userData} />
            </div>
            <div>
              <h2>Followers</h2>
              <UserCardList followers={this.state.followerData} />
            </div>
          </div>
          :
          <div>
            <p>Getting user data...</p>
          </div>
        }

      </div>
    );
  }
}

export default App;
