import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function AdminNavBar() {
    const { logout } = useAppContext();
    const navigate = useNavigate();

    const onLogout = () => {
        logout(() => {
            navigate('/login');
        });
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Text>
                    <Link to="/">Painel de Admin</Link>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Administração" id="basic-nav-dropdown">
                            <p>
                                <Link to="/admin/product-manager">Produtos</Link>
                            </p>
                            <p>
                                <Link to="/admin/orderlist">Pedidos</Link>
                            </p>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className=" basic-navbar-nav justify-content-end">
                    <div className="navbar-admin-logout" onClick={() => onLogout()}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="mx-2" color={'#fff'} />
                        <Navbar.Text>Logout</Navbar.Text>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdminNavBar;
