import { Card } from 'flowbite-react';
import React from 'react';

const SpotifyCard = ({link, body}) => {

    const embedLink = `${link.split('spotify.com/')[0]}spotify.com/embed/${link.split('spotify.com/')[1]}`

    return (
        <Card>
            <div>
                <iframe style={{ borderRadius: '12px' }} src={`${embedLink}?theme=0`} width="100%"  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {body}
            </p>
        </Card>
    );
};

export default SpotifyCard;