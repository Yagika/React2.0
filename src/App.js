import {Users, Posts, Comments} from "./components"
import './App.css'

function App() {
    return (
        <div className={'app'}>
            <div className={'user_post'}>
                <div>
                    <h1>Users</h1>
                    <Users/>
                </div>

                <div>
                    <h1>Posts</h1>
                    <Posts/>
                </div>
            </div>
            <hr/>
            <h1>Comments</h1>
            <Comments/>
        </div>
    );
}

export default App;
