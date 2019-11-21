import React, { Component } from 'react';
import './login.scss';
import Grid from '@material-ui/core/Grid';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import { validateUser } from '../../redux/actions/validateUsers'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errorUser: false,
            errorPwd: false
        }
    }

    handleSubmit = (username, password, erroruser, errorpwd) => {
        const obj = {
            username: username,
            password: password
        }
        if (erroruser == false && errorpwd == false) {
            this.props.validateUser(obj)
        }
    }

    resetCredentials = () => {

    }

    handleChange = (e) => {
        console.log('check e synthetic', e.target.id, e.target.value)
        const value = e.target.value

        if (e.target.id === 'username') {
            if (value.length) {
                this.setState({
                    errorUser: false,
                    username: value
                })
            }
            else {
                this.setState({
                    errorUser: true,
                    username: value
                })
            }
        }

        if (e.target.id === 'pwd') {
            if (value.length) {
                this.setState({
                    errorPwd: false,
                    password: value
                })
            }
            else {
                this.setState({
                    errorPwd: true,
                    password: value
                })
            }
        }
    }

    render() {
        const { username, password, errorUser, errorPwd } = this.state
        return (
            <div className="container-fluid p-0">
                <div className="loginContainer">
                    <div className="wrap-login">

                        <div className="text-center">
                            <span className="login-form-logo">
                                <i className="fa fa-user-o mt-4"></i>
                            </span>
                            <span className="login-form-title">
                                LOG IN
					         </span>
                        </div>

                        <div className="username">
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <PersonRoundedIcon />
                                </Grid>
                                <Grid item>
                                    <TextField id="username" className="w-100" label="Username"
                                        onChange={(e) => this.handleChange(e)}
                                        value={username}
                                        InputLabelProps={{
                                            style: { color: '#fff' }
                                        }} />

                                    {
                                        errorUser ?

                                            (<span className="errorMsg">
                                                * Please Enter User Name
                                             </span>) : null
                                    }
                                </Grid>
                            </Grid>
                        </div>

                        <div className="password">
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <LockIcon />
                                </Grid>
                                <Grid item>
                                    <TextField id="pwd"
                                        label="Password"
                                        type="password"
                                        onChange={(e) => this.handleChange(e)}
                                        value={password}
                                        InputLabelProps={{
                                            style: { color: '#fff' }
                                        }} />
                                    {
                                        errorPwd ?

                                            (<span className="errorMsg">
                                                * Please Enter Password
                                             </span>) : null
                                    }
                                </Grid>
                            </Grid>
                        </div>

                        <div className="checkBox">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={true}
                                        // onChange={handleChange('checkedB')}
                                        style={{ color: '#fff', font: '12px' }}
                                        value="checkedB"
                                    />
                                }
                                label={<span style={{ fontSize: '12px', color: '#fff' }}>Remember me</span>}
                            />
                        </div>

                        <div className="customButton text-center">
                            <Button variant="contained" size="large" className="loginButton" onClick={() => this.handleSubmit(username, password, errorUser, errorPwd)} >
                                Login
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
})


export default connect(mapStateToProps, { validateUser })(Login)