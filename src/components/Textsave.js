import React, { Component } from 'react';
import axios from 'axios';

class Textsave extends Component {
    state = {
        text: ''
    };

    handleAdd = async e => {
        await this.setState({
            text: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        var lv = this.state.text;
        //alert(lv);
        let formData = new FormData()
        formData.append("text", lv);
        const url = "http://localhost/react-backend/";
        axios.post(url, formData)
            .then(res => alert(res.data))
            .catch(err => console.log('error'));
    }

    render() {
        return (

            <div className="App-header">
              <input onChange={this.handleAdd} type="text" className="form-control" placeholder="Enter Text!!! " />
              <br />
              <input type="submit" className="btn btn-success" onClick={this.handleSubmit} id="submit" value="save" />
              {/* <button onClick={this.handleSubmit} className="btn btn-success" id="submit">Save</button> */}
            </div>
        );
    }
}

export default Textsave;