import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast, ToastContainer } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Watching video' },
            { id: 'todo3', title: 'Doing exercise' }
        ],
        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Added successfully");
    }

    handleDeleteTodo = (id) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== id);

        this.setState({
            listTodos: currentTodo
        })
        toast.success("Deleted successfully");
    }

    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: ''
            })
            toast.success("Updated successfully")
        }
        else{
            this.setState({
                editTodo: todo
            })
        }
        
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>

                                    }
                                    <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className="delete" onClick={() => this.handleDeleteTodo(item.id)}>Delete</button>
                                </div>
                            )

                        })

                    }
                </div>
            </div>
        )

    }
}

export default ListTodo;