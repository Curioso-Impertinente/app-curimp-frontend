import { Navbar } from 'flowbite-react';
import React from 'react';

import classes from './NavigationItem.module.css';

const NavigationItem = ({ name }) => {
    return (
        <Navbar.Link href="/navbars">
            {name}
        </Navbar.Link>
    );
};

export default NavigationItem;