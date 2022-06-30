import React from 'react';
import NoteCard from '../Note/NoteCard';
import YoutubeCard from '../Youtube/YoutubeCard';

const PostItem = (props) => {

    // const postType = () => {
    //     if (post.type === "note") {
    //         return <NoteCard title={post.title} body={post.body} />
    //     }
    // }

    let postType = null

    if (props.type === "note") {
        postType = <NoteCard {...props} />
    } else if (props.type === 'youtube') {
        postType = <YoutubeCard {...props} />
    }

    return postType
};

export default PostItem;