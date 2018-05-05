import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',    
        }   
    
        this.onNameChange = this.onChange.bind(this, 'name');
        this.onAddressChange = this.onChange.bind(this, 'address');
    }

    nextId = () => {
        this.uniqueId = this.uniqueId || 3
        return this.uniqueId++
    }

    onChange = (name, e) => {
        this.setState({[name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        let devAddress = document.getElementById("deviceAddress").value;
        let devName = document.getElementById("deviceName").value;
        let device = {
            id: this.nextId(),
            name: devName,
            address: devAddress 
        }
        return fetch('/api/device', {
          body: JSON.stringify(device),
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST',
        })
            .then(response => response) // parses response to JSON
            .then(this.props.onChange)
      }

    render() {
        return (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <div class="form-group mb-2">
                    <label for="deviceName" className="sr-only">Device Name</label>
                    <input onChange={this.onNameChange} type="text" className="form-control" id="deviceName" placeholder="Device Name" />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="deviceAddress" class="sr-only">IP Address</label>
                    <input onChange={this.onAddressChange} type="text" className="form-control" id="deviceAddress" placeholder="IP Address" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Add Device</button>
            </form>
        );
    }
}

export default Form;
