import './User.css';

export default function User({item, choseUser}) {
    return (
        <div>
            {item.id} - {item.username}
            <button onClick={() => choseUser(item.id)}>Details</button>
        </div>
    );
}