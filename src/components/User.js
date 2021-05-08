function User(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Is Married: {`${props.isMarried}`}</p>
            <p>City: {props.city}</p>
        </div>
    );
}

export default User;