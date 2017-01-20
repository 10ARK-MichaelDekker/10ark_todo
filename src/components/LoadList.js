import React from 'react';

class LoadList extends React.Component {
    render() {
        return (
           <div className="loadListButton" onClick={this.props.loadSamples}>Load To-Do List</div>
        )
    }
}

export default LoadList;