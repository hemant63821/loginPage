import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logIn from './components/login/login'
import Header from './Layout/header/Header'
import Footer from './Layout/footer/Footer'
import UserDashboard from './containers/UserDashboard-Container'

const wrappedRoutes = () => (
    <div>
        <Header></Header>
        <div className="App" >
            <Route exact path="users" component={UserDashboard} />
        </div>
        <Footer></Footer>
    </div>
);

const Router = () => (
    <main>
        <Switch>
            <Route exact path="/" component={logIn} />
            <Route exact path="/login" component={logIn} />
            <Route path="/" component={wrappedRoutes} />
        </Switch>
    </main>
);

export default Router;