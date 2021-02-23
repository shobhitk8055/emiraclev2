import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Home';
import Nav from './Partials/Nav';
import Modals from './Partials/Modals';

export default class App extends Component {
    render() {
        return(
        <Router>
            <>
                <Nav/>
                <Modals />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </>
        </Router>);
}
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
