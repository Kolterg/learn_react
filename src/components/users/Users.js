import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "../user/User";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState([]);

/*
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            });
    }, []);
*/

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    const choseUser = (id) => setChosenUser(users.find(value => value.id === id));

    return (
        <div className={'wrap'}>
            <div className={'usersBox'}>
                {
                    users.map(value => <User
                        choseUser={choseUser}
                        key={value.id}
                        item={value}/>)
                }
            </div>
            <div className={'choseUserBox'}>
                {chosenUser && <div> {chosenUser.id} - {chosenUser.name} - {chosenUser.email}</div>}
            </div>
        </div>
    );
}