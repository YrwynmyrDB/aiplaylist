import React from 'react';
import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

<h1>AI Playlist</h1>
      </header>
   
    <div className="Eye">
    <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/30b5a4c8-06ce-4a7c-98da-79be4130c480">
</iframe>

    </div>
    </div>
  );
}

export default App;
