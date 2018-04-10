import React, { Component } from 'react';

class ConfirmDelete extends Component {
    render() {
        return (
            <div>
                Are you sure?
                <button onClick={this.props.deleteComment}>yes</button>
                <button onClick={this.props.cancelDelete}>no</button>
            </div>
        );
    }
}

export default ConfirmDelete;