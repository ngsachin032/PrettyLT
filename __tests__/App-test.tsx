/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// jest.mock('createNativeStackNavigator')

it('renders correctly', () => {
  renderer.create(<App />);
});
