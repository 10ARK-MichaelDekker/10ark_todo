import React from 'react';
import AddForm from './AddForm';
//import LoadList from './LoadList';
import ToDo from './ToDo';
import sampleToDos from '../sample-todo';
import base from '../base';

class App extends React.Component {
    
    constructor() {
        super();

        this.addToDo = this.addToDo.bind(this);
        this.removeToDo = this.removeToDo.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.alertClick = this.alertClick.bind(this);

        // get initialState
        this.state = {
          toDos: {}
        };
  	}
    
    //Sync with FireBase
    componentWillMount() {
        this.ref = base.syncState(`toDos`, {
                context: this,
                state: 'toDos'
            })
    }
    
    //Unsync with FireBase
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    
    //When the data changes
    componentWillUpdate(nextProps, nextState) {
        console.log('Something Changed');
        console.log({nextProps, nextState});
    }
    
    //Add record
    addToDo(todo) {
        // update our state
        const toDos = {...this.state.toDos};
        // add in our new todo
        const timestamp = Date.now();
        toDos[`todo-${timestamp}`] = todo;
        // set state
        this.setState({ toDos });
    }
    
	//Remove record
    removeToDo(key) {
        const toDos = {...this.state.toDos};
        toDos[key] = null;
        this.setState({ toDos });
    }
    
    // simple alert - Use this function to populate the EDIT form with these vars
     alertClick(thisKey){
		 alert([thisKey] + " - " + this.state.toDos[thisKey].title + " - " + this.state.toDos[thisKey].message + " - " + this.state.toDos[thisKey].status);
    }
    
    // load xml file into state
    loadSamples() {
		const toDos = {...this.state.toDos};
      	this.setState({
      		toDos: sampleToDos
    	});
    }
    
    // the stuff that displays
    render() {
        return (
            <div className="container ourMain">
            <div className="row">
				<div className="col-sm-5 imgLogo">
					
				</div>
				<div className="col-sm-7 titleBlock">
					<h1>To-Do List</h1>
				</div>
			</div>
            <AddForm addToDo={this.addToDo} />
            <div className="toDoItemList">
                <ul>
                    {
                        Object
                            .keys(this.state.toDos)
                            .map(key => <ToDo key={key} reactKey={key} details={this.state.toDos[key]} removeToDo={this.removeToDo} alertClick={this.alertClick} />)
                    }
                </ul>
            </div>
            
              {/*<LoadList loadSamples={this.loadSamples} />*/} {/*for loading xml: initial state populate*/}
                                 
            </div>
        )
    }
}

export default App;