import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Post from './Components/Post'
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})


class App extends Component {
  render() {
    return (
      <ApolloClient client={client}>
        <div className="App">
          <Header />
          <section className='App-main'>
            <Post />
          </section>
        </div>
      </ApolloClient>
    );
  }
}

export default App;
