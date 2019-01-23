import React from 'react';
import {shallow, mount} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<Button onClick={callback}/>);
        wrapper.find('button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});
