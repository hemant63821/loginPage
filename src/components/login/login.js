import React, { Component } from 'react';
import './login.scss';
import Grid from '@material-ui/core/Grid';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';

export default class Login extends Component {

    render() {
        return (
            <div className="container-fluid p-0">
                <div className="loginContainer">
                    <div className="wrap-login">
                        <span className="login-form-logo">
                            <i className="fa fa-user-o"></i>
                        </span>

                        <span className="login-form-title">
                            Log in
					    </span>

                        <div className="">
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <PersonRoundedIcon />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Username" />
                                </Grid>
                            </Grid>
                        </div>


                        <div className="">
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <LockIcon />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Password" />
                                </Grid>
                            </Grid>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
