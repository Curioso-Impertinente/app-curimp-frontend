import React from 'react';
import NoteCard from '../Note/NoteCard';
import YoutubeCard from '../Youtube/YoutubeCard';
import SpotifyCard from '../Spotify/SpotifyCard';
import CodeCard from '../Code/CodeCard';

const PostItem = (props) => {

    let postType = ((props) => {
        if (props.type === "note") return <NoteCard {...props} />
        if (props.type === 'youtube') return <YoutubeCard {...props} />
        if (props.type === 'spotify') return <SpotifyCard {...props} />
        if (props.type === 'code') return <CodeCard {...props} />
    })(props)

    return (
        <div className='mt-4'>
            {postType}
        </div>
    )
};

export default PostItem;