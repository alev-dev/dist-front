import React from 'react';
import { useAppContext } from '../../context/AppContext';
import AdminNavBar from './AdminNavBar';
import ClientNavBar from './ClientNavBar';

export default function NavBar() {
    const { loaded, user } = useAppContext();

    if (loaded) {
        if (user?.role === 'admin') return <AdminNavBar />;

        return <ClientNavBar />;
    }
}
