import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

//constants
const API_URL = 'https://api.github.com/users/';
const USER = 'drew-ross';
const FOLLOWERS = '/followers';
// https://api.github.com/users/drew-ross  /followers

class App extends React.Component {
  state = {
    userData: {},
    followersData: []
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
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div className="main-user">
          <UserCard user={this.state.userData} />
        </div>
      </div>
    );
  }
}

export default App;
