import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Post from './Components/Post'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className='App-main'>
        <Post nickname='Chris' avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://i.imgur.com/K82y6PV.png" />
        <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://i.imgur.com/rNy0j9g.png" />
        </section>
      </div>
    );
  }
}

export default App;
