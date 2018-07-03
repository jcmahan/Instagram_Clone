import React from 'react';
import './App.css';
import Header from './Components/Header'
import Post from './Components/Post'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


const App = () => {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className='App-main'>
            <Post />
          </section>
        </div>
      </ApolloProvider>
    );
  };

export default App;
