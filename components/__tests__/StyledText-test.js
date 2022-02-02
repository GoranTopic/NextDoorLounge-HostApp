import { MonoText } from '../StyledText';
import * as React from 'react';
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();
it(`renders correctly`, () => {
});
  expect(tree).toMatchSnapshot();



import renderer from 'react-test-renderer';
