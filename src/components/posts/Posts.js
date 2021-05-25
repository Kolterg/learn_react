import './Posts.css';
import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [chosenPosts, setChosenPost] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, []);

    const chosePost = (id) => setChosenPost(posts.find(value => value.id === id));

    return (
        <div className={'wrap'}>
            <div className={'postsBox'}>
                {
                    posts.map(value => <Post
                        chosePost={chosePost}
                        key={value.id}
                        item={value}/>)
                }
            </div>
            <div className={'chosePostBox'}>
                {chosenPosts && <div> {chosenPosts.id} - {chosenPosts.body} </div>}
            </div>
        </div>
    );
}