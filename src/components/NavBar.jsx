import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function NavBar() {
    const { user, cart, setState } = useAppContext();

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
                    {!user ? (
                        <Navbar.Text>
                            <Link href="/login"> Login</Link>
                        </Navbar.Text>
                    ) : (
                        <Navbar.Text>
                            Usuario : <Link href="/profile">{user.name}</Link>
                        </Navbar.Text>
                    )}

                    <Nav.Item className="navbar-cart">
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

export default NavBar;
