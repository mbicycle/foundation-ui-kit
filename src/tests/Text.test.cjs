const React = require('react');
const { render } = require('@testing-library/react');
const Text = require('../components/Text').default;

describe('Text component', () => {
    it('renders without crashing with default props', () => {
        render(React.createElement(Text, null, 'Test text'));
    });

    it('renders without crashing with heading-two variant', () => {
        render(React.createElement(Text, { variant: 'heading-two' }, 'Test text'));
    });

    it('renders without crashing with heading-three variant', () => {
        render(React.createElement(Text, { variant: 'heading-three' }, 'Test text'));
    });
});
