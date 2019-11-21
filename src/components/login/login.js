import React, { Component } from 'react';
import './login.scss';
import Grid from '@material-ui/core/Grid';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default class Login extends Component {

    render() {

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
                                        InputLabelProps={{
                                            style: { color: '#fff' }
                                        }} />
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
                                        // hintText="Password"
                                        InputLabelProps={{
                                            style: { color: '#fff' }
                                        }} />
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
                            <Button variant="contained" size="large" className="loginButton">
                                Login
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
