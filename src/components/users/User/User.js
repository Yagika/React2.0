import ucss from './User.module.css'

const User = ({user,getId}) => {
    let {id, name, username, phone, email} = user;
    return (
        <div
            className={`${ucss.user} ${user.id === 2 || user.id === 3 || user.id === 6 || user.id === 7 || user.id === 10 ? ucss.beige : ucss.brown}`}>
            <h2>{id}.{name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <div>
                <button onClick={() => getId(id)}>Details</button>
            </div>
        </div>
    );
};
export {User};