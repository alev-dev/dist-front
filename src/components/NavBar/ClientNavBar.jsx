import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
function ClientNavBar() {
    const { user, cart, logout } = useAppContext();
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
                    <Link to="/">Distribuidora</Link>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <p>
                                <Link to="/categories/refrigerante">Refrigerante</Link>
                            </p>
                            <p>
                                <Link to="/categories/cerveja">Cerveja</Link>
                            </p>
                            <NavDropdown.Divider />
                            <p>
                                <Link to="/categories/tudo">Ver Tudo</Link>
                            </p>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className=" basic-navbar-nav justify-content-end">
                    <FontAwesomeIcon icon={faUser} className="mx-2" color={'#fff'} />
                    <Nav className=" justify-content-end">
                        <NavDropdown title="Conta" id="basic-nav-dropdown">
                            <p>
                                {!user ? (
                                    <Navbar.Text className= "black-text">
                                        <Link to="/login"> Login</Link>
                                    </Navbar.Text>
                                ) : (
                                    <Navbar.Text className="navbar-user">User: {user.name}</Navbar.Text>
                                )}
                            </p>

                            {user && (
                                <>
                                    <p>
                                        <Link to="/orders">Meus Pedidos</Link>
                                    </p>
                                    <p className="navbar-logout" onClick={() => onLogout()}>
                                        Logout
                                    </p>
                                </>
                            )}
                        </NavDropdown>
                    </Nav>

                    <Nav.Item className="navbar-cart mx-2">
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} color={'#fff'} />
                        </Link>
                        <span className="cart-quantity">{cart?.length || 0}</span>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ClientNavBar;
