import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';


function Navbar1() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-transparent" >
      <Container>
        <Navbar.Brand href="#home">Cursos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Lanzamientos</Nav.Link>
            <NavDropdown title="Comunidad" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Chat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Chatroom
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Eventos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Planes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Sesion Iniciada como <a href="#login">Ricardo Angel</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;

   