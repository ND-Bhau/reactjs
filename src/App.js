import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CHeader from './components/CHeader';
import Rj from './components/Rj';
import axios from 'axios';

class App extends Component {

  state = {
    text: ' '
  };

  handleAdd = async e => {
    await this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    var lv = this.state.text;
    alert(lv);
    let formData = new FormData()
    formData.append("text", lv);
    const url = "http://localhost/react-backend/";
    axios.post(url, formData)
      .then(res => alert(res.data))
      .catch(err =>console.log('error'));
  }

  render() {
    return (

      <div className="App-header">
        <input onChange={this.handleAdd} type="text" className="form-control" id="text" placeholder="Enter Text!!! " />
        <br />
        <input type="submit" className="btn btn-success" onClick={this.handleSubmit} id="submit" value="save" />
        {/* <button onClick={this.handleSubmit} className="btn btn-success" id="submit">Save</button> */}
      </div>
      // <div className="App">
      // <h1> Hi Nik , good to see you back</h1>
      // <Header />
      // <CHeader />
      // <Rj />
      // </div>
    );
  }
}

export default App;
