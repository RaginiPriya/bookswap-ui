import React, { Component } from 'react'
import { connect } from 'react-redux';

class Login extends Component {

    // write function to call signup (google about fetch)


    // write function to call login (this will return accessToken and username in response. Store them in redux)
    // like this
    // if (accessToken && username) {
    //     this.props.setUser({ token: accessToken, username: username })
    // }
    // we save the token here to redux so that in some other file, when calling an authenticated api, we can get the token easily from redux (refer Library.js and Books.js)
    // google about react redux

    render() {
        return(
            <div>
                {/* sign up/login page, with email, username, password, name, area, city, state, country. (if email or username is already registered, we will throw error). */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setUser: (data) => {
        const action = {
            type: 'SET_USER',
            payload: data
        }
        return dispatch(action)
    }
})

export default connect(null, mapDispatchToProps)(Login)