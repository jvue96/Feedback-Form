import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Support extends Component {

    state = {
        feedback: {
            support: '',  
        },
    }

    returnToPrevious = (event) => {
        // change location here 
        this.props.history.push('/comments'); 
    }

    nextPage = (event) => {
        event.preventDefault();
        console.log('Button clicked', this.state.feedback);
        const action= {type: 'SUPPORT', payload: this.state.feedback.support}
        this.props.dispatch(action)
        this.props.history.push('/comments'); 
    }

    handleChange = (event) => {

        this.setState({
            feedback: {
                ...this.state.feedback,
                support: event.target.value,
            },
          })
        }


    render() {
        return (
            <section>
            <div>
                <form>
                    <label>How well do you feel Supported??</label> <br /> 
                    <input placeholder="insert a number 1 - 5" 
                           type="text" 
                           onChange={this.handleChange} 
                           name="name" ></input>
                </form>
                <Review /> 
            </div>
            <div>
                <button id="fixed-button" 
                        onClick={this.returnToPrevious}>Go back to Understanding</button>
                <button id="next-button" 
                onClick={this.nextPage}> Next Page </button>
            </div>
        </section>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(Support));

