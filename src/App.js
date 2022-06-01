import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './styles/App.css'

class App extends Component {

  render () {
    return (
      <div className='app'>
        <Header />
        <Form />
      </div>
    )
  }
}

export default App;
