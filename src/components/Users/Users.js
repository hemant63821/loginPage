import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allUsers } from '../../redux/actions/allUserAction'

class Users extends Component {
    componentWillMount() {
        this.props.allUsers()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    // users: 
})

export default connect(mapStateToProps, { allUsers })(Users);