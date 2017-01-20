import React from 'react';
import editButton from '../img/edit.png';


class ToDo extends React.Component {
    
    render() {
        return (
            
            <li className="list-item">
            
                <div className="row">
                    <h2>{this.props.details.title}</h2>
                </div>
                <div className="row toDoMessage">
                    {this.props.details.message}{/* - key : {this.props.reactKey}*/}
                </div>
                <div className="row edit">
                    <div className="col-sm-10 toDoStatus vertCenter">
                        { /* Ternary If ElseIf Else */
                            this.props.details.status === "complete" ? <span className="complete">complete</span>
                            : this.props.details.status === "in progress" ? <span className="inProgress">in progress</span>
                            : this.props.details.status === "pending" ? <span className="pending">pending</span>
                            : this.props.details.status === "on hold" ? <span className="onHold">on hold</span>
                            : <span>Status Undefined</span>
                        }     
                    </div>
                    { /* If status = Complete, item cannot be edited */ 
                        this.props.details.status !== "complete" 
                        ?  <div className="col-sm-1 vertCenter"><img src={editButton} alt="edit" className="imgEdit" onClick={() => this.props.alertClick(this.props.reactKey)} /></div>
                        : <div className="col-sm-1 vertCenter"><img src={editButton} alt="edit" className="imgEditDisabled" /></div>
                    } 
                    <div className="col-sm-1 vertCenter"><div className="imgDelete" onClick={() => this.props.removeToDo(this.props.reactKey)}></div></div>
                </div>
              
            </li>
           
        )
    }
}

export default ToDo;