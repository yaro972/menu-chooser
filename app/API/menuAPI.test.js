import React from 'react';
import { shallow } from 'enzyme';
import axios from '../../__mocks__/axios';

jest.mock('axios');

describe('MenuApi test', () => {
    describe('Access ', () => {
        it('should fetch a list of tasks', () => {
            const getSpy = jest.spyOn(axios, 'get');
            const toDoListInstance = shallow(
                /*<ToDoList/>*/
            );
            expect(getSpy).toBeCalled();
        });
    })
});
