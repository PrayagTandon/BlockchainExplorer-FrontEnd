import React, { useState, useEffect } from 'react';
import Transactions from './Transactions';
import Transfer from './Transfer';
import Blocks from './Blocks';
import { generateMockEthereumData } from './MockData';

const Dashboard = ({ section }) => {
    const [transactions, setTransactions] = useState([]);
    const [latestBlocks, setLatestBlocks] = useState([]);

    // Fetching the mock data
    useEffect(() => {
        const mockData = generateMockEthereumData(20);
        setTransactions(mockData);
        // To show only 2 latest blocks in the Recent Transactions section...
        setLatestBlocks(mockData.slice(0, 2));
    }, []);

    // TO add new transactions to all transactions list
    const addNewTransaction = (newTx) => {
        setTransactions((prevTx) => [newTx, ...prevTx]);
        setLatestBlocks((prevBlocks) => [newTx, ...prevBlocks.slice(0, 1)]);
    };

    const availableAddresses = transactions.map((tx) => tx.from);

    return (
        <div className="m-6 backdrop-blur-2xl border-4 border-[#8e726a] rounded-md">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-center mb-8 underline">Blockchain Overview</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className='w-[95%]'>
                        <h3 className="font-semibold text-lg mb-4">Latest Blocks</h3>
                        <ul className='flex flex-col gap-4'>
                            {latestBlocks.map((block, index) => (
                                <li key={index} className="border-2 rounded-md py-3 px-4 bg-[#95a9f2] border-[#193dc1] flex flex-col gap-1">
                                    <strong>Transaction Hash:</strong> {block.transactionHash} <br />
                                    <strong>From:</strong> {block.from} <br />
                                    <strong>To:</strong> {block.to} <br />
                                    <strong>Amount:</strong> {block.amount} ETH
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        {section === 'transactions' && <Transactions transactions={transactions} />}
                        {section === 'transfer' && <Transfer addNewTransaction={addNewTransaction} availableAddresses={availableAddresses} />}
                        {section === 'blocks' && <Blocks transactions={transactions} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
