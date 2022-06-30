import { Card } from 'flowbite-react';
import React from 'react';

const CodeCard = ({title, code, language}) => {

    return (
        <Card>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <div>
                <pre className="bg-gray-800 text-green-400 p-4 text-sm">
                    <code>
                        {code}
                    </code>
                </pre>
            </div>
        </Card>
    );
};

export default CodeCard;