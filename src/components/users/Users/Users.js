import {useEffect, useState} from "react";

import {usersService} from "../../../services";
import {User} from "../User/User";
import uscss from './Users.module.css'

const Users = ({setUser,setUserId}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAllUsers().then(({data}) => setUsers(data))
    }, [])

    const getId = async (id) => {
        usersService.getUserById(id).then(({data}) => setUser(data))
    }

    return (
        <div className={uscss.users}>
            <h1>Users</h1>
            {users ? users.map(user => <User key={user.id} user={user} getId={getId} setUserId={setUserId}/>) : "Loading.."}
        </div>
    );
};
export {Users}