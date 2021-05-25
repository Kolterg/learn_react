import './App.css';
import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // withRouter
} from "react-router-dom";
import Posts from "./components/posts/Posts";

// Через Router Link зробити перемикання між Users і Posts, У кожного юзера і поста має бути кнопка Details.

function App() {
    return (
        <Router>
            <div>
                <div className={'links'}>
                    <Link to={'users'}>Go to Users</Link>
                    <br/>
                    <Link to={'posts'}>Go to posts</Link>
                </div>
                <Switch>
                    <Route path={'/users'} render={() => <Users/>}/>
                    <Route path={'/posts'} render={() => <Posts/>}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
