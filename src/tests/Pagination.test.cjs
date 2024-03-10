const React = require('react');
const { render } = require('@testing-library/react');
const ProgressBar = require('../components/ProgressBar').default;

describe('ProgressBar component', () => {
    it('renders without crashing', () => {
        render(React.createElement(ProgressBar, { progress: 50 }));
    });
});

