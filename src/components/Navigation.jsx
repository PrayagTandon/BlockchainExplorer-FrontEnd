import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-[#562c20] text-white py-4 px-12 shadow-md flex justify-center">
            <ul className="flex gap-16 justify-center items-center">
                <li>
                    <Link to="/transactions" className=" hover:text-gray-300">Transactions</Link>
                </li>
                <li>
                    <Link to="/transfer" className="hover:text-gray-300">Transfer</Link>
                </li>
                <li>
                    <Link to="/blocks" className="hover:text-gray-300">Blocks</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
