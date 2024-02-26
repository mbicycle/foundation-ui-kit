const { render, fireEvent } = require('@testing-library/react');
const React = require('react');
const { CategorySearch } = require('../components/CategorySearch');

describe('CategorySearch component', () => {
    const categories = ['Category 1', 'Category 2', 'Category 3'];

    it('expands dropdown when button is clicked', () => {
        const { getByRole } = render(React.createElement(CategorySearch, { categories }));
        const dropdownButton = getByRole('button', { name: 'All categories' });

        fireEvent.click(dropdownButton);

        categories.forEach(category => {
            expect(getByRole('button', { name: category })).toBeTruthy();
        });
    });

    it('updates selected category when dropdown item is clicked', () => {
        const { getByRole } = render(React.createElement(CategorySearch, { categories }));
        const dropdownButton = getByRole('button', { name: 'All categories' });

        fireEvent.click(dropdownButton);
        const categoryToSelect = categories[0];
        const categoryButton = getByRole('button', { name: categoryToSelect });
        fireEvent.click(categoryButton);

        expect(getByRole('button', { name: categoryToSelect })).toBeTruthy();
    });
});
