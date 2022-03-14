import React from "react";
import { toast, ToastContainer } from 'react-toastify';

class AddTodo extends React.Component {
    state ={
        title: ''
    }

    handleOnChangeTitle = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () =>{
        if(!this.state.title){
            toast.error("Missing title's todo");
            return;
        }
        let todo = {
            id: Math.random,
            title: this.state.title     
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title} onChange={(event) => this.handleOnChangeTitle(event)}/>
                <button className="add" onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;