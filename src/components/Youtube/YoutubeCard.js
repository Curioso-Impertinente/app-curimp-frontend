import { Card } from 'flowbite-react';
import React from 'react';

const NoteCard = ({link, body}) => {

    return (
        <Card>
            <div className='video-container'>
                <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {body}
            </p>
        </Card>
    );
};

export default NoteCard;