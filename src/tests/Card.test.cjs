const { render } = require('@testing-library/react');
const { Card } = require('../components/Card');
const React = require('react');

describe('Card component', () => {
    it('renders without crashing', () => {
        const defaultProps = {
            title: "Default Title",
            subtitle: "Default Subtitle"
        };

        const getByText = render(React.createElement(Card, { ...defaultProps, isExpanded: false })).getByText;

        expect(getByText(defaultProps.title)).toBeTruthy();
        expect(getByText(defaultProps.subtitle)).toBeTruthy();
    });
});

