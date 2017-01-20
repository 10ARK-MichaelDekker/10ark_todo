import React from 'react';

class AddForm extends React.Component {
    
  createToDo(event) {
    event.preventDefault();
    const todo = {
      title: this.title.value,
      message: this.message.value,
      status: this.status.value,
    }
    this.props.addToDo(todo);
    this.addForm.reset();
  }
	
	focusInput(event) {
		this.title.focus();
	}
    
    render() {
        return (
            <form ref={(input) => this.addForm = input} className="todo-edit" onSubmit={(e) => this.createToDo(e)}>
                <div className="form-holder">
                     <div className="row formRow">
                        <div className="col-sm-2">title</div>
                        <div className="col-sm-10">
							
                            <input 
								type="text"
								ref={(input) => this.title = input} 
								size="45" 
							/>
									
                        </div>
                    </div>
                    <div className="row formRow">
                        <div className="col-sm-2">status</div>
                        <div className="col-sm-10">
                            <select ref={(input) => this.status = input}>
                                <option value="pending">pending</option>
                                <option value="in progress">in progress</option>
                                <option value="on hold">on hold</option>
                                <option value="complete">complete</option>
                            </select>
                        </div>
                    </div>
                            <div className="row formRow">
                        <div className="col-sm-2">message</div>
                        <div className="col-sm-10">
                            <textarea ref={(input) => this.message = input} cols="50" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="row formRow">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit">Add</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddForm;