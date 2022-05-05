import udcss from "./UserDetails.module.css"

const UserDetails = ({user, setUserId}) => {
    const {
        id, name, email, phone, username, website, company,
        address: {city, street, suite, zipcode, geo: {lat, lng}},
        company: {catchPhrase, bs}
    } = user;

    return (
        <div className={udcss.details}>
            <h1>Details</h1>
            <h2>{id} {name}</h2>
            <h3> Email:{email}</h3>
            <h3>Phone:{phone}</h3>
            <h3>UserName:{username}</h3>
            <p>Website:{website}</p>
            <p>Adress:
                City:{city},
                Street:{street},
                Suite:{suite},
                Zipcode:{zipcode},
                Geo: lat:{lat},
                lng:{lng}
            </p>
            <p>Company:
                Name:{company.name},
                CatchPhrase:{catchPhrase},
                BS:{bs}
            </p>
            <div className={udcss.btn}>
                <button onClick={() => {setUserId(id)}}>Posts</button>
            </div>
        </div>

    );
};

export {UserDetails};