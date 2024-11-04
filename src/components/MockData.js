import { faker } from '@faker-js/faker';
import CryptoJS from 'crypto-js';

// Function to generate any amount of mock Ethereum transactions. Here we are generating 20 mock data...
export const generateMockEthereumData = (num = 20) => {
    const mockData = [];

    for (let i = 0; i < num; i++) {
        const block = {
            blockNumber: faker.number.float({ min: 1000000, max: 2000000 }),
            transactionHash: CryptoJS.SHA256(faker.string.uuid()).toString(),
            from: faker.finance.ethereumAddress(),
            to: faker.finance.ethereumAddress(),
            amount: faker.finance.amount({ min: 0.1, max: 100, dec: 18, symbol: 'ETH' }),
            gasUsed: faker.number.float({ min: 21000, max: 500000 }),
            timestamp: faker.date.recent().toISOString(),
        };

        mockData.push(block);
    }

    return mockData;
};
