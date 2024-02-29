const { render } = require('@testing-library/react');
const React = require('react');
const { Input } = require('../components/Input');

describe('Input component', () => {

    it('renders input with required attribute', () => {
        const inputProps = {
            type: 'email',
            id: 'email-input',
            label: 'Email',
            placeholder: 'Enter your email',
        };

        const inputElement = React.createElement(Input, inputProps);

        const { container } = render(inputElement);

        const input = container.querySelector('input');

        expect(input).toBeDefined();
        expect(input.hasAttribute('required')).toBeTruthy();
    });
});
