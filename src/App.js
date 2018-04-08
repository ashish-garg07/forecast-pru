import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    let port = process.env.PORT || 8080;
    let api_host = 'https://intense-inlet-31084.herokuapp.com/';
    console.log(api_host);
    this.callApi(api_host)
      .then(res => this.setState({ response: res.weather }))
      .catch(err => console.log(err));
  }

  callApi = async (api_host) => {
    const response = await fetch(api_host+'/forecast');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
      </div>
    );
  }
}

export default App;
