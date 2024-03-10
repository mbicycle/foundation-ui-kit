const { render } = require('@testing-library/react');
const React = require('react');
const Link = require('../components/Link').default;

describe('Link component', () => {
    it('renders a link with correct attributes', () => {
        const href = 'https://example.com';
        const linkText = 'Example Link';

        const { getByText } = render(React.createElement(Link, { href }, linkText));

        const linkElement = getByText(linkText);

        expect(linkElement).toBeDefined();
        expect(linkElement.getAttribute('href')).toEqual(href);
    });
});


