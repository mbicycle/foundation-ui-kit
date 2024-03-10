const React = require('react');
const { render, fireEvent } = require('@testing-library/react');
const Toggle = require('../components/Toggle').default;

describe('Toggle component', () => {
    it('renders without crashing', () => {
        render(React.createElement(Toggle));
    });

    it('toggles state when clicked', () => {
        const { container } = render(React.createElement(Toggle));
        const toggleInput = container.querySelector('input[type="checkbox"]');
        fireEvent.click(toggleInput);
        expect(toggleInput.checked).toBe(true);
    });
});

