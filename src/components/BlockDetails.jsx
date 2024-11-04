import React from 'react';

const BlockDetails = ({ address, balance, gasUsed }) => {
    if (!address) {
        return (
            <div className="bg-yellow-100 text-yellow-700 p-4 mt-4 rounded-md">
                Ethereum address is required to view block details.
            </div>
        );
    }

    return (
        <div className="bg-white p-4 mt-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Block Details</h2>
            <table className="min-w-full text-left text-sm">
                <tbody>
                    <tr>
                        <td className="font-medium">Ethereum Address:</td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">Balance:</td>
                        <td>{balance}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">Gas Used:</td>
                        <td>{gasUsed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BlockDetails;
