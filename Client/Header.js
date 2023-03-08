import { useState } from 'react';
import { BellFill, PersonCircle } from 'react-bootstrap-icons';
import { Badge, Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './img/International trade-bro.png';
import './Header.css';

function HomePage() {
  const [notificationCount, setNotificationCount] = useState(0);

  const incrementNotificationCount = () => {
    setNotificationCount(notificationCount + 1);
  };

  const clearNotifications = () => {
    setNotificationCount(0);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="NavbarBrand">
          <img src={logo} alt="KHOD-LIK" width="40" height="40" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
            <Nav.Link as={Link} to="/" className="me-4">Home</Nav.Link>
            <Nav.Link as={Link} to="/service">Service</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="ms-auto d-flex align-items-center">
            <div className="me-3">
              <div className="border rounded-circle position-relative" onClick={clearNotifications}>
                <BellFill size={24} className="position-absolute top-0 start-0 m-2" />
                {notificationCount > 0 && (
                  <Badge pill bg="danger" className="position-absolute top-0 end-0 me-2">
                    {notificationCount}
                  </Badge>
                )}
              </div>
            </div>
            <div>
              <NavDropdown
                title={<PersonCircle size={28} />}
                id="navbarScrollingDropdown"
                align={{ sm: 'end' }}
              >
                <NavDropdown.Item as={Link} to="/You">You</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Log Out</NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomePage;
