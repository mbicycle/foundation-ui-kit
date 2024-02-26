const React = require('react');
const { render } = require('@testing-library/react');
const ModalButton = require('../components/Modal').default;

describe('ModalButton component', () => {

    it('toggles modal visibility on button click', () => {
        const modalId = 'test-modal';
        const buttonText = 'Open Modal';

        const modalButtonElement = React.createElement(ModalButton, { modalId, buttonText });

        const { getByText } = render(modalButtonElement);

        const button = getByText(buttonText);

        button.click();
    });
});
