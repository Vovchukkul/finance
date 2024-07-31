import React from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {
  return (
    <div className="container box mt-5 px-auto is-flex is-flex-direction-column is-align-content-center is-justify-content-center">
      <h1 className='title'>Finance app</h1>
      <Form />
    </div>
  );
}

export default App;
