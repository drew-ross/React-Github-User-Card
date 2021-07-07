import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import UserCardList from './UserCardList';
import Search from './Search';

//constants
const API_URL = 'https://api.github.com/users/';
const FOLLOWERS = '/followers';
// https://api.github.com/users/drew-ross  /followers

class App extends React.Component {
  state = {
    userSearch: 'drew-ross',
    searchText: 'drew-ross',
    userData: null,
    followerData: []
  };

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userSearch !== prevState.userSearch) {
      this.getUserData();
    }
  }

  getUserData() {
    axios.get(`${API_URL}${this.state.userSearch}`)
      .then(res => {
        this.setState({
          ...this.state,
          userData: res.data
        });
      })
      .catch(err => console.log(err));
    axios.get(`${API_URL}${this.state.userSearch}${FOLLOWERS}`)
      .then(res => {
        this.setState({
          ...this.state,
          followerData: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      searchText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      userSearch: this.state.searchText.trim()
    });
  };

  render() {
    return (
      <div className="App">

        <header>
          <h1>Github User Card</h1>
          <Search
            searchText={this.state.searchText}
            handleChanges={this.handleChanges}
            handleSubmit={this.handleSubmit}
          />
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
