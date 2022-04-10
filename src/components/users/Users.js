import User from "./User";
import {useEffect, useState} from "react";

const Users = () => {
    const [users, setUsers]=useState([])
    useEffect(()=>{
        fetch('')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;