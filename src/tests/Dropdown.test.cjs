const React = require('react');
const { render } = require('@testing-library/react');
const Dropdown = require('../components/Dropdown').default;

describe('Dropdown component', () => {
    it('renders without crashing', () => {
        const options = ['Option 1', 'Option 2', 'Option 3'];
        render(React.createElement(Dropdown, { options: options, placeholder: 'Select an option...' }));
    });
});

