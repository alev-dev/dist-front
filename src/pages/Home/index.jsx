import React from 'react';
import { useAppContext } from '../../context/AppContext';
import AdminHome from './AdminHome';
import ClientHome from './ClientHome';

export default function Home() {
    const { loaded, user } = useAppContext();
    console.log(user);
    if (loaded) {
        if (user?.role === 'admin') return <AdminHome />;

        return <ClientHome />;
    }
}
