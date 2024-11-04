import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="bg-blue-600 text-white py-4 px-6 shadow-md">
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
    );
};

export default Header;
