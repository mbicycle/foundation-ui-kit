const React = require('react');
const { render } = require('@testing-library/react');
const { Search } = require('../components/Search');

describe('Search component', () => {
    it('renders without crashing with default props', () => {
        render(React.createElement(Search));
    });

    it('renders without crashing with custom placeholder', () => {
        render(React.createElement(Search, { searchPlaceholder: 'Custom Placeholder' }));
    });
});

