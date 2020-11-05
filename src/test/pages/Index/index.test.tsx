import React from 'react';
import renderer from 'react-test-renderer';

import { Index } from '../../../pages/Index';

test('Index', () => {
  let component: renderer.ReactTestRenderer | undefined;

  const mock = jest.fn();

  renderer.act(() => {
    component = renderer.create(
      <Index yourValue={5} increment={mock} decrement={mock} />
    );
  });
  if (!component) {
    expect(false).toEqual(true);
    return;
  }
  expect(component).toMatchSnapshot();
});
