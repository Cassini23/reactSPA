import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, IndexRedirect ,hashHistory} from 'react-router';
import Friends from  './friends';
import Groups from  './groups';

class defaultPage extends React.Component{
    render(){
        return <div>
            <h2> Page not found!</h2>
        </div>
    }
}

class inProgress extends React.Component{
    render(){
        return <div>
             Not yet implemented
        </div>
    }
}

class App extends React.Component{
    render(){
        return <div>
            <ul className = "header">
                <li><Link to="/friends" activeClassName="active"> Friends </Link></li>
                <li><Link to="/groups" activeClassName="active"> Groups </Link></li>
                <li><Link to="/broadcasts" activeClassName="active"> Broadcasts</Link></li>
            </ul>
            <div className = "content">
                {this.props.children}
            </div>
        </div>
    }
}

ReactDOM.render(<Router history = {hashHistory}>
    <Router path="/" component={App}>
        <IndexRedirect to="/friends"/>
        <Route path="/friends" components={Friends}>
        </Route>
        <Route path="/groups" components={Groups}>
        </Route>
        <Route path="/broadcasts" components={inProgress}>
        </Route>
        <Route path="*" component ={defaultPage}>
        </Route>
    </Router>
</Router>, document.getElementById('content'));