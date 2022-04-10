import Users from "./components/users/Users/Users";
import Posts from "./components/posts/Posts/Posts";
import Comments from "./components/comments/Comments/Comments";
import './App.css'

function App() {
    return (
        <div className={'app'}>
            <h1>Users</h1>
            <Users/>
            <hr/>
            <h1>Posts</h1>
            <Posts/>
            <hr/>
            <h1>Comments</h1>
            <Comments/>
        </div>
    );
}

export default App;
