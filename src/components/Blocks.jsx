import React, { useState } from 'react';
import BlockDetails from './BlockDetails';

const Blocks = ({ transactions }) => {
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedBlock, setSelectedBlock] = useState(null);

    const handleOnChange = (e) => {
        const address = e.target.value;
        setSelectedAddress(address);

        // To find the transaction realted to current address
        const block = transactions.find((tx) => tx.from === address || tx.to === address);

        // Using Ternary Operator to Display the block....
        setSelectedBlock(block ? {
            address: block.from,
            balance: block.balance || 'N/A',
            gasUsed: block.gasUsed || 'N/A'
        } : null);
    };

    return (
        <div>
            <h3 className="font-semibold text-lg mb-2">Select Block by Address</h3>
            <select
                value={selectedAddress}
                onChange={handleOnChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
                required
            >
                <option value="">Select an Address</option>
                {transactions.map((tx, index) => (
                    <option key={index} value={tx.from}>
                        {tx.from}
                    </option>
                ))}
            </select>

            {selectedBlock ? (
                <BlockDetails {...selectedBlock} />
            ) : (
                <div className="bg-yellow-100 text-yellow-700 p-4 mt-4 rounded-md">
                    Please enter a Valid Ethereum Address.
                </div>
            )}
        </div>
    );
};

export default Blocks;
