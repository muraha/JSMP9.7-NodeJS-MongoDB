import React, { Component } from 'react';

class List extends Component {

    onDeleteDevice = async (id) => {
        await fetch('/api/device/' + id, {
            method: 'DELETE'
        })
        .then(this.props.onDelete)
    }

    renderDevice(index) {
        const device = this.props.devices[index];

        return (
            <tr>
                <th scope="row">{device.id}</th>
                <td>{device.name}</td>
                <td>{device.address}</td>
                <td>
                    <div class="btn-toolbar float-right" role="toolbar">
                        <div className="btn-group mr-2" role="group">
                            <button type="button" className="btn btn-outline-secondary">On</button>
                            <button type="button" className="btn btn-outline-secondary">Off</button>
                        </div>
                        <div class="btn-group" role="group">
                            <button onClick={this.onDeleteDevice.bind(this, device.id)} type="button" className="btn btn-outline-warning">Delete</button>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }

    render() {
        const devices = this.props.devices.map((device, index) => this.renderDevice(index));

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Device Name</th>
                        <th scope="col">Device Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { devices }
                </tbody>
            </table>
        );
    }
}

export default List;
