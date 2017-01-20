import React from 'react';
import AddForm from './AddForm';
import ToDo from './ToDo';

class MainBlock extends React.Component {
  render() {
    return (
        <div className="container ourMain">
            <h1>To-Do List</h1>
			
            <AddForm />
        
                <ul>
                    {
                        Object
                            .keys(this.state.toDos)
                            .map(key => <toDo />)
                    }
                </ul>
        
            <div className="loadListButton" onClick={this.props.loadSamples}>Load To-Do List</div>
        </div>
    )
  }
}

export default MainBlock;