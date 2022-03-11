import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if(!this.state.title || !this.state.salary){
            alert('Missing required param')
            return;
        }
        this.props.addNewJob({
            id:Math.random(),
            title: this.state.title,
            salary: this.state.salary
        });
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Jon's Title:</label><br />
                <input type="text" name="fname" value={this.state.title} onChange={(event) => this.handleChangeTitleJob(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" name="lname" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} />
                <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}
export default AddComponent;