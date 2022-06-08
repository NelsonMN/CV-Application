import React from 'react';
import Header from './components/Header';
import Form from './components/form/Form';
import Footer from './components/Footer';
import './styles/App.css'

const App = () => {

  return (
    <div className='app'>
      <Header />
      <Form />
      <Footer />
    </div>
  )
  
}

export default App;
