import React from 'react';
import axios from "axios";
import UserCard from"./components/FollowCard";
import './App.css';


class App extends React.Component {
  
  constructor (){
    super()
    this.state = {
        name: '',
        email: '',
        login: '',
        avatar: '',
        followers: []
    }
}

  
  

componentDidMount(){
  axios
    .get("https://api.github.com/users/aharris1012")
    .then (response => {
      console.log (response.data.name)
      this.setState({
          name: response.data.name,
          email: response.data.email,
          login: response.data.login,
          avatar: response.data.avatar_url
      })
  })
  .catch(err => console.log(err));
   
  axios
    .get("https://api.github.com/users/aharris1012/followers")
    .then (response => {
      console.log(response)
      this.setState ({
          followers: response.data
      })
  })
}
 


render(){
    return (
      <div className="App-header">
        <h2>MY FOLLOWERS</h2>
        {this.state.followers.map(follower => {
               return (
                 
                 <div className = 'followers'> 
                 
                 <img src = {follower.avatar_url} className = 'avatar-img' />
                  <div className = 'info'>
                    <p>User Name:{follower.name}</p>
                    <p> {follower.login}</p>
                    
                    <p>{follower.location}</p>
                  </div>
                   
                 </div>
                 
               )
              }
              )}
              <div className ="yo">
              <UserCard 
              name = {this.state.name}
              email = {this.state.email}
              login = {this.state.login}
              avatar = {this.state.avatar}
              />
              </div>
          </div>
          
        )
    }
}

export default App;