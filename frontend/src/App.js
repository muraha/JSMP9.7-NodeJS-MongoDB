import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Form from './Form';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devices: []
    }
  }


  componentDidMount() {
    this.refreshDevices();
  }

  refreshDevices = () => {
    fetch('/api/device')
      .then(res => res.json())
      .then (res => this.setState({devices: res}) )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List devices={this.state.devices} onDelete={this.refreshDevices}/>
       <Form onAdd={this.refreshDevices} /> 
      </div>
    );
  }
}

export default App;
