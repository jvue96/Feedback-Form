import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
    render() {
        return (
            <div>
              {/* attempted stretch goal here to display all feedback on /admin. unable to do so, have an error when uncommenting code below out  */}
           {/*      { this.props.reduxState.feedbackInfo.map( (feedback, index) => {
            return (
              <div key={index}>
                <p>Feeling: {feedback.feeling }</p>
                <p>Understanding {feedback.understanding }</p>
                <p>Support {feedback.supprt }</p>
                <p>Comments {feedback.comments }</p>
              </div>
            )
          })
        } */}
            <h1>in Admin page </h1>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Admin);

