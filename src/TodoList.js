import React from 'react';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'
class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({todos: updatedTodos})
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({todos: updatedTodos})
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo toggleTodo={this.toggleCompletion} completed={todo.completed} updateTodo={this.update} todos={todo.task} id={todo.id} key={todo.id} remove={() => this.remove(todo.id)}/>
        })
        return(
            <div className="TodoList">
                <h1>Todo List! <span>A Simple React Todo List App.</span></h1>
                    <NewTodoForm newTodo={this.create}/>
                    {todos}
            </div>
        )
    }
}

export default TodoList