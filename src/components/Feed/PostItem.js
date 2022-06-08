import React from 'react';
import NoteCard from '../Note/NoteCard';

const PostItem = ({post}) => {
    console.log(1, post)

    // const postType = () => {
    //     if (post.type === "note") {
    //         return <NoteCard title={post.title} body={post.body} />
    //     }
    // }

    let postType = null

    if (post.type == "note") {
        postType = <NoteCard title={post.title} body={post.body} />
    }
    return (
        {postType}
    );
};

export default PostItem;