import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Detail from './component/Detail';
class App extends Component {

  state = {
    response: '',
    location: ''
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.weather }))
    //   .catch(err => console.log(err));
  }



  callApi = async (evt) => {
    evt.preventDefault();
    let response;
    try {
      response = await fetch('/forecast/' + this.state.location);
      response.json()
        .then(res => this.setState({response: res.weather }))
    }catch (err) {
      console.log('Http error', err);
      throw Error(err);
    }
    // const body = await response.json();
    //
    // if (response.status !== 200) throw Error(body.message);
    //
    //  body.then(res => this.setState({ response: res.weather }));
  };

  changeLocation = (evt) => {
    this.setState({
      location: evt.target.value
    });
  };

  render() {
    const tdStyle = {
      width:'30%',
      textAlign: 'center',
      padding:'10px'
    };
    const divStyle = {
      width:'100%'
    };
    return (
      <div>
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.callApi}>
          <label style={tdStyle}>I want to know the weather for
          </label>
            <input placeholder={"City"} type="text" onChange={this.changeLocation}/>
        </form>
      </div>
      <table style={divStyle}>
       <th style={tdStyle}>Date & Time</th><th style={tdStyle}>Current Temp</th><th style={tdStyle}>Min Temp</th><th>Max Temp</th>
        <Detail forecast={this.state.response}/>
      </table>
      </div>

    );
  }
}

export default App;
