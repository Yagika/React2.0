import './User.css'

export const User = ({user}) => {
    let {id, name, username, phone, email} = user;
    return (
        <div className={user.id%2? 'beige user':'brown user'}>
            <h2>{id}.{name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};