// __tests__/Intro-test.js
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {Home} from "../app/Views/home";
import {CommandButton} from "../app/Views/home/CommandButton";

describe('Home Component', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Home/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


describe('Command button', () => {
    const clickCallBack = jest.fn();

    const btn = shallow(<CommandButton onPress={() => clickCallBack()}/>);
    btn.find('')

    console.log('eeee', btn);
        // TODO Vérification appel click
});
