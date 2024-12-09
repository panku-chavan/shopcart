'use client'; // This ensures it's a Client Component

import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
