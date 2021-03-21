import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect,
    //useRouteMatch
} from "react-router-dom";
//import ReactDOM from "react-dom";
import Contact from "./Contact";
import Home from "./HomeContent";
import ForEmployers from "./ForEmployers";
import Visas from "./Visas";
class App extends Component {
    state = {};
    render() {
        return (
            <div className="container">
                {/* {history.location.pathname === "/clientShops" && (
                    <button className="btn btn-secondary" onClick={this.goBack}>
                        {"< "}Go Back
                    </button>
                )} */}
                <div>
                    <div className="bg-primary">
                        <br />
                        <h1 className="font-weight-bold">&nbsp;&nbsp;FORMAN</h1>
                        <h2 className="text-danger font-italic">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;supplies
                            shuttering carpenters for free!
                        </h2>
                        <br />
                        <br />
                    </div>
                </div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="nav-item ml-3">
                                    <NavLink
                                        to="/employers"
                                        activeClassName="bg-secondary"
                                    >
                                        For Employers
                                    </NavLink>
                                </li>
                                <li className="nav-item ml-3">
                                    <NavLink
                                        to="/visas"
                                        activeClassName="bg-secondary"
                                    >
                                        Visas
                                    </NavLink>
                                </li>
                                <li className="nav-item ml-3">
                                    <NavLink
                                        to="/contact"
                                        activeClassName="bg-secondary"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* <nav className="d-flex justify-content-around bg-light">
                        
                    </nav> */}
                    <Switch>
                        <Route path="/employers">
                            <ForEmployers />
                        </Route>
                        <Route exact path="/visas">
                            <Visas />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    {/* <Switch>
                        <Route exact path="/clientShops">
                            <ShopApp data={this.state} />
                        </Route>
                       

                        <Route
                            exact
                            path="/createShop"
                            component={CreateShop}
                        ></Route>
                    </Switch> */}
                </Router>
            </div>
        );
    }
}

export default App;
