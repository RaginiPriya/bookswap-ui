import React, { Component } from 'react'
import { connect } from 'react-redux';

class Books extends Component {

    // write a function to call nearby books api
    

    render() {
        return(
            <div>
                {/* books page which will be sorted by nearest place and grouped by username, like [{username1: [book1, book2]}, {username2: [book2,book3,book4]}]. */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducer
})

export default connect(mapStateToProps)(Books)