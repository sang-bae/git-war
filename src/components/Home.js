import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Git-War</h1>
        <p>Compete with your friends on github and check-out popular repos & contributors!</p>
        <Link className='button' to='/battle'>
            Battle
        </Link>
      </div>
    )
  }
}

export default Home;