// src/components/ClientComponent.js
'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Adjust path as necessary

export default function ClientComponent({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
