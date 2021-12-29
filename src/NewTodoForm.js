import React from 'react'
import './NewTodoForm.css'
import { v4 as uuidv4 } from 'uuid'
class NewTodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const idTodo = {...this.state, id: uuidv4(), completed: false}
        this.props.newTodo(idTodo)
        this.setState({task: ''})
    }

    render() {
        return(
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Todo</label>
                    <input id="task" name="task" placeholder='New Todo' onChange={this.handleChange} value={this.state.task}/>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;