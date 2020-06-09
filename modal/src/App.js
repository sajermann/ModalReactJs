import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Components/Modal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() =>{setIsModalVisible(true)}}>Open</button>
      {
        isModalVisible && 
        <Modal onClose={()=>{setIsModalVisible(false)}} >
          <h2>Modal do App</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur non iure suscipit nostrum earum inventore sequi nihil vero incidunt enim, architecto ratione dolorem consequatur eligendi, voluptatum similique saepe quidem?</p>
        </Modal>
      }
    </div>
  );
}

export default App;
