import {useState} from "react";

import {Users, Posts} from "./components"
import acss from './App.module.css'
import {postsService} from "./services";

function App() {
    const [posts, setPosts] = useState(null)

    const getUserId = (id) => {
            postsService.getUsersPostsById(id).then(({data}) => setPosts(data))
    }

    return (
        <div className={acss.app}>
            <div>
                <Users getUserId={getUserId}/>
            </div>

            {posts &&
                <div>
                    <Posts posts={posts}/>
                </div>
            }
        </div>
    );
}

export default App;
