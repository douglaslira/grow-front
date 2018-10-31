import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import App from "./components/App";
import Albums from "./components/Albums";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div className="container">
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Album</strong>
                    </a>
                </div>
            </div>
        </header>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/albums" component={Albums} />
        </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("app"));
