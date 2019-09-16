import React from 'react';
import renderer from 'react-test-renderer';
import HomeComponent from "../app/Views/home/HomeComponent";

describe('Home Component', () => {
    describe('Show Home page', () => {
        test('renders correctly', () => {
            const tree = renderer.create(<HomeComponent/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
});
