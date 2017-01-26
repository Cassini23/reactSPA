import React from 'react';
import ReactDOM from 'react-dom';
import { Link,Router, Route, IndexRedirect ,hashHistory} from 'react-router';
import Friends from  './friends.js';
import Groups from  './groups.js';

class defaultPage extends React.Component{
    render(){
        return <div>
            <h2> Page not found!</h2>
        </div>
    }
}

class App extends React.Component{
    render(){
        return <div>App</div>
    }
}

ReactDOM.render(<App/>, document.getElementById('content'));