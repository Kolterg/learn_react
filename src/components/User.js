function User(props) {

    let {name, age, isMarried, city} = props;

    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Is Married: {isMarried.toString()}</p>
            <p>City: {city}</p>
        </div>
    );
}

export default User;