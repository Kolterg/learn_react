export default function Post({item, chosePost}) {
    return (
        <div>
            User #{item.userId} - {item.title}
            <button onClick={() => chosePost(item.id)}>Details</button>
        </div>
    );
}