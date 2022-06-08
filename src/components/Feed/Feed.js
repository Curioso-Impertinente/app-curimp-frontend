import React from 'react';
import PostItem from './PostItem';

const Feed = ({ posts }) => {
    console.log(posts)

    const postList = posts.map((post) => (
        <PostItem
            key={post.id}
            post={post}
        />
    ))
    return (
        <div class="container mx-auto">
            {postList}
        </div>
    );
};

export default Feed;