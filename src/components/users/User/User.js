import './User.css'

const User = ({user}) => {
    let {id, name, username, phone, email} = user;
    return (
        <div className={'user'}>
            <h2>{id}.{name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;