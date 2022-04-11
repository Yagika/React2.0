import {useEffect, useState} from "react";

import {User} from "../User/User";
import './Users.css'
import {usersService} from "../../../services";

export const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        usersService.getAllUsers().then(value => setUsers(value))
    }, [])
    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};