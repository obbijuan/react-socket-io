import React from 'react';
import { UiProvider } from './context/UiContext';
import { RouterPages } from './pages/RouterPages';

export const TicketApp = () => {
    return (
        <UiProvider>
            <RouterPages/>
        </UiProvider>
    )
}
