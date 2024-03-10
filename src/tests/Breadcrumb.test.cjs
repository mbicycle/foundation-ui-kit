const { render } = require('@testing-library/react');
const React = require('react');
const { Breadcrumb } = require('../components/Breadcrumbs');

describe('Breadcrumb component', () => {
    it('renders single item in the list', () => {
        const items = ['Home'];
        const { getByText } = render(React.createElement(Breadcrumb, { items }));

        const link = getByText(items[0]);
        expect(link).toBeTruthy();
    });

    it('renders correct navigation arrow between items', () => {
        const items = ['Home', 'Catalog', 'Product'];
        const { container } = render(React.createElement(Breadcrumb, { items }));

        const arrows = container.querySelectorAll('svg');
        expect(arrows.length).toBe(items.length - 1);
    });

    it('renders all items in the list', () => {
        const items = ['Home', 'Catalog', 'Product'];
        const { getByText } = render(React.createElement(Breadcrumb, { items }));

        items.forEach(item => {
            const link = getByText(item);
            expect(link).toBeTruthy();
        });
    });

    it('renders items in correct order', () => {
        const items = ['Home', 'Catalog', 'Product'];
        const { getAllByRole } = render(React.createElement(Breadcrumb, { items }));

        const renderedItems = getAllByRole('listitem').map(li => li.textContent);
        expect(renderedItems).toEqual(items);
    });
});





