import React from 'react';

const Receipt = ({ transactionHash, blockHash, blockNumber, from, to, amount, gasUsed }) => {
    if (!from || !to || !amount) {
        return (
            <div className="bg-red-100 text-red-700 p-4 mt-4 rounded-md">
                Required Trsnsfer details are Missing.
            </div>
        );
    }

    return (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Transaction Receipt</h3>
            <table className="min-w-full text-left text-sm">
                <tbody>
                    <tr>
                        <td className="font-medium">Transaction Hash:</td>
                        <td>{transactionHash}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">Block Hash:</td>
                        <td>{blockHash}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">Block Number:</td>
                        <td>{blockNumber}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">From Address:</td>
                        <td>{from}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">To Address:</td>
                        <td>{to}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">Amount:</td>
                        <td>{amount} ETH</td>
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

export default Receipt;
