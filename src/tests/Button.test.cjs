const { render } = require('@testing-library/react');
const React = require('react');
const { Button } = require('../components/Button');

describe('Button component', () => {
    it('renders a button with text', () => {
        const buttonText = 'Click me';
        const { getByRole } = render(React.createElement(Button, null, buttonText));

        const button = getByRole('button', { name: buttonText });
        expect(button).toBeTruthy();
    });

    it('button is enabled when isDisabled is not passed or is false', () => {
        const buttonText = 'Click me';
        const { getByRole } = render(React.createElement(Button, { isDisabled: false }, buttonText));

        const button = getByRole('button', { name: buttonText });
        expect(button.disabled).toBeFalsy();
    });

    it('button is disabled when isDisabled is true', () => {
        const buttonText = 'Click me';
        const { getByRole } = render(React.createElement(Button, { isDisabled: true }, buttonText));

        const button = getByRole('button', { name: buttonText });
        expect(button.disabled).toBeTruthy();
    });
});



