import React, { useState } from 'react';

const Transactions = ({ transactions }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 8;

    //Setting up the pagination to show All transactions.
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    // Function to calaculate Total pages
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);

    // Page change handler
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h3 className="font-semibold text-lg mb-4">All Transactions</h3>
            <ul className='flex flex-col gap-4'>
                {currentTransactions.map((tx, index) => (
                    <li key={index} className="border-2 rounded-md py-3 px-4 bg-[#8aeac7] border-[#ccc62a] flex flex-col gap-1">
                        <strong>Transaction Hash:</strong> {tx.transactionHash} <br />
                        <strong>From:</strong> {tx.from} <br />
                        <strong>To:</strong> {tx.to} <br />
                        <strong>Amount:</strong> {tx.amount} ETH
                    </li>
                ))}
            </ul>

            {/*  Implementing Pagination */}
            <div className="flex justify-center mt-4">
                {[...Array(totalPages).keys()].map((number) => (
                    <button
                        key={number + 1}
                        onClick={() => handlePageChange(number + 1)}
                        className={`px-4 py-2 mx-1 border rounded-lg ${currentPage === number + 1 ? 'bg-blue-800 cursor-pointer text-white' : 'bg-white text-black'}`}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Transactions;
