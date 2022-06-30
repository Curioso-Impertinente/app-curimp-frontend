import React from 'react';

import NavigationItem from './NavigationItem';

import logo from '../../assets/logo_temp.png'
import {  Navbar } from 'flowbite-react';

const MainHeader = ({ categories }) => {

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
                    Curioso Impertinente
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {categoryList}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MainHeader;