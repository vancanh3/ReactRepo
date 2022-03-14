import React from "react";
import AddHobby from "./AddHobby";

class Hobbies extends React.Component {
    //init state, it always get data from DB
    state = {
        listHobbies: [
            { id: 1, name: 'Watching film' },
            { id: 2, name: 'Playing footbal' },
            { id: 3, name: 'Working out' }
        ]
    }

    addNewHobby = (hobby) =>{
        this.setState({
            listHobbies: [...this.state.listHobbies, hobby]
        })
    }

    deleteHobby = (id) =>{
        this.setState({
            listHobbies: this.state.listHobbies.filter(i => i.id !== id)
        })
    }

    render() {
        let { listHobbies } = this.state;
        return (
            <div className="list-todo-container">
                <AddHobby addNewHobby = {this.addNewHobby}/>
                <div className="list-todo-content">
                    {listHobbies && listHobbies.length > 0 &&
                        listHobbies.map((item, index) => {
                            return (
                                <div className="todo-child">
                                    <span>{item.id} - {item.name}</span>
                                    <button>Edit</button>
                                    <button onClick={() => this.deleteHobby(item.id)}>Delete</button>
                                </div>

                            )
                        })
                    }
                </div>

            </div>
        )
    }
}
export default Hobbies;