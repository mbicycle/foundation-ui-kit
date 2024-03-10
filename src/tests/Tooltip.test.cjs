const React = require('react');
const { render } = require('@testing-library/react');
const Tooltip = require('../components/Tooltip').default;

describe('Tooltip component', () => {
    it('renders without crashing', () => {
        render(React.createElement(Tooltip, { content: 'Tooltip content', position: 'top' }));
    });
});

