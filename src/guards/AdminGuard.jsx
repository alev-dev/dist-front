import { getUser } from '../services/user.service';
import { Navigate } from 'react-router-dom';
//Guard to check if the user is a student
export default function ({ children }) {
    const user = getUser();
    if (user && user.role === 'admin') return children;
    else return <Navigate to="/unauthorized" />;
}
