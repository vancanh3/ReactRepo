import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";


class MyComponent extends React.Component {
   
    state = {
        arrJobs: [
            {id: 'Job1', title: 'dev', salary: '500'},
            {id: 'Job2', title: 'ba', salary: '100'}
        ]
    }
   
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (idJob) =>{
        let currentJobs = this.state.arrJobs.filter(item => item.id !== idJob);
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('run did updateL ', 'prev state: ', prevState, ' current state: ', this.state);
    }

    componentDidMount(){
        console.log('Run component did mount');
    }

    render() {
        return (
            <React.Fragment>
                <AddComponent addNewJob = {this.addNewJob}/>
                <ChildComponent  arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob}/>
            </React.Fragment>

        );
    }
}


export default MyComponent;
