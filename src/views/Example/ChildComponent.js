import React, { Fragment } from "react";
import './Demo.css'

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        });
    }

    handleOnClickDelete = (id) => {
        this.props.deleteAJob(id);
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state
        return (
            <React.Fragment>
                {!showJobs ?
                    <div style={{color: 'red'}}>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <><span onClick={() => this.handleOnClickDelete(item.id)}>x</span></>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </React.Fragment>

        );
    }
}

// const ChildComponent = (props) => {
//     let {arrJobs} = props;
//     return (
//         <React.Fragment>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 400){
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )   
//                         }

//                     })
//                 }
//             </div>
//         </React.Fragment>
//     )

// }



export default ChildComponent;
