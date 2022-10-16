import React from 'react';
import renderer from 'react-test-renderer';
import render from 'react-native-testing-library'
import List from '../screens/List';
import store from '../store/Store';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductReducer  from '../reducer/Reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from '../../../App'

beforeEach(async () => { 
    await AsyncStorage.clear()
});

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  test('Shows "Hello world!"', () => {
      store = mockStore(initialState);
      const { getByText } = render(
          <Provider store={store}>
              <App />
          </Provider>
      );
      expect(getByText('Hello World!')).not.toBeNull();
  });

  test('adds 1 + 2 to equal 3', () => {
    let tree = renderer.create(<List />).getInstance();
    tree.getValue(1, 2);
    expect(tree.getValue(1, 2)).toBe(3);
  });
});



