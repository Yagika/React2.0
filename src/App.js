import {useState} from "react";

import {Users, Posts, UserDetails} from "./components"
import acss from './App.module.css'

function App() {
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState(null)

    return (
        <div className={acss.app}>
            <div className={acss.wrap}>
                <Users setUser={setUser} setUserId={setUserId}/>
                {user && <UserDetails user={user} setUserId={setUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
}

export default App;
