import 'react-native';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  const { debug } = render(<App />);
  //debug();
});

// example
// home.spec.tsx home.test.tsx