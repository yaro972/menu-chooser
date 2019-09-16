import React from 'react';
import renderer from 'react-test-renderer';
import MenuView from "../app/Views/Menu/MenuView";


describe('Menu View Component', () => {
    describe('Show Menu list page', () => {
        test('renders correctly', () => {
            const tree = renderer.create(<MenuView/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
});
