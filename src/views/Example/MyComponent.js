import React, { Fragment } from "react";

class MyComponent extends React.Component {
    state = {
        firstname: '',
        lastname: ''
    }
    // handleOnChangeName = (event) => {
    //     console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleClickButton = () => {
    //     alert('click me')
    // }

    handleChangeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Data input: ", this.state);
    }

    render() {
        let name = 'Adam';
        return (
            <React.Fragment>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" name="fname" value={this.state.firstname} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" name="lname" value={this.state.lastname} onChange={(event) => this.handleChangeLastName(event)} />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </React.Fragment>

        );
    }
}


export default MyComponent;
