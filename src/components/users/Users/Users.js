import {useEffect, useState} from "react";

import {usersService} from "../../../services";
import {User,UserDetails} from "../../../components";
import uscss from './Users.module.css'

const Users = ({getUserId}) => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)


    useEffect(() => {
        usersService.getAllUsers().then(({data}) => setUsers(data))
    }, [])

    const getId = async (id) => {
        usersService.getUserById(id).then(({data}) => setUser(data))
    }

    return (
        <div className={uscss.wrap}>
            <div className={uscss.users}>
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user} getId={getId}/>)}
            </div>
            <div className={uscss.uds}>
                {user && <UserDetails key={user.id} user={user} getUserId={getUserId}/>}
            </div>
        </div>
    );
};
export {Users}