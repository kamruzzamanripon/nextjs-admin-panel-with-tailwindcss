import React from 'react';
import Logo from './sidebar/logo';
import Nav from './sidebar/Nav';
import SettingButton from './sidebar/SettingButton';

const Sidebar = () => {
    return (
        <aside className="hidden sm:flex sm:flex-col">
            <Logo />
            
            <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
                <Nav />
                <SettingButton />
            </div>
        </aside>
    );
};

export default Sidebar;