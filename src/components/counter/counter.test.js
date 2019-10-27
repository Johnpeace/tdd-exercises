import React from 'react';
import { shallow } from 'enzyme';
import Counter from './counter.component';

describe('counter', () => {
  it('expect to render counter class component', () => {
    expect(shallow(<Counter />)).toMatchSnapshot();
  })
})
