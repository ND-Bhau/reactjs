import React, { Component } from 'react';
import axios from 'axios';
//nikhil
class Savedata extends Component {

    refreshedvalue = {
        Name: '',
        Email: '',
        Phone: '',
        Address: ''
    };

    ForName = async e => {
        await this.setState({
            Name: e.target.value
        });
    }
    ForEmail = async e => {
        await this.setState({
            Email: e.target.value
        });
    }
    ForPhone = async e => {
        await this.setState({
            Phone: e.target.value
        });
    }
    ForAddress = async e => {
        await this.setState({
            Address: e.target.value
        });
    }

    saveData = e => {
        e.preventDefault();
        let formData = new FormData()
        formData.append("Name", this.state.Name);
        formData.append("Email", this.state.Email);
        formData.append("Phone", this.state.Phone);
        formData.append("Address", this.state.Address);
        const url = "http://localhost/react-backend/";
        axios.post(url, formData)
            .then(res => alert(res.data))
            .catch(err => console.log('error'));
    }

    render() {
        return (
            <div>
                <div className="App-header">
                    <input type="text" placeholder="Your Name" onChange={this.ForName} className="form-control" /> <br />
                    <input type="text" placeholder="Your Email" onChange={this.ForEmail} className="form-control" /><br />
                    <input type="number" placeholder="Your Phone" onChange={this.ForPhone} className="form-control" /><br />
                    <input type="text" placeholder="Your Address" onChange={this.ForAddress} className="form-control" /><br />
                    <input type="submit" value="Save Data" onClick={this.saveData} className="btn btn-success" />
                </div></div>
        );
    }
}

export default Savedata;

