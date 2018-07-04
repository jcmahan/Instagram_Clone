import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Posts from './Components/Posts';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Pusher from 'pusher-js';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  constructor(){
    super();
    this.pusher = new Pusher('PUSHER_APP_KEY', {
      cluster: 'eu', 
      encrypted: true
    });
  }
  componentDidMount(){
    if ('actions' in Notification.prototype) {
      alert('You can enjoy the notification feature');
    } else {
      alert('Sorry notifications are NOT supported on your browser')
    }
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className='App-main'>
            <Posts pusher={this.pusher} apollo_client={client}/>
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
