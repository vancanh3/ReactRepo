import React from "react";

class AddHobby extends React.Component{
    state = {
        name: ''
    }
    onHanldeChangeInput = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    addNewHobby(){
        let newHobby = {
            id: Math.floor(Math.random() * 3),
            name: this.state.name
        }
        this.props.addNewHobby(newHobby);
    }

    render(){
        return(
            <div className="add-hobby">
                <input type="text" value={this.state.name} onChange={(event) => this.onHanldeChangeInput(event)}/>
                <button onClick={() => this.addNewHobby()}>Add</button>
            </div>
        )
    }
}

export default AddHobby;