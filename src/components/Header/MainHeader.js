import React from 'react';

import NavigationItem from './NavigationItem';
import classNames from './MainHeader.module.css'

import logo from '../../assets/logo_temp.png'
import { Button, Navbar } from 'flowbite-react';

const MainHeader = ({ categories }) => {
    console.log(categories)

    const categoryList = categories.map((category) => (
        <NavigationItem
            key={category.id}
            name={category.name}
        />
    ))
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Curioso Impertinente Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>
                    Get started
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {categoryList}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MainHeader;