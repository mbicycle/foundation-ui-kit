module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/tests/*.test.cjs'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    transformIgnorePatterns: [
        'node_modules/(?!(ts-jest)/)',
    ],
};
