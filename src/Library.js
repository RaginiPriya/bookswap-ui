import React, { Component } from 'react'
import { connect } from 'react-redux';

class Library extends Component {

    // write a function to get the books of the user
    // pass Bearer + ' ' + this.props.user.token in Authorization header

    // write a function to add, remove books
    // pass the entire books list after adding/removing to backend

    render() {
        return(
            <div>
                {/* This page will show the particular user's library. Can be logged in user's or any other user's */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducer
})

export default connect(mapStateToProps)(Library)