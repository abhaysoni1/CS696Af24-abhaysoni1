import { Navbar, Form, FormControl, Nav, Dropdown } from 'react-bootstrap';
import { FaBell , FaUser } from 'react-icons/fa';
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3 nav-wrap">
      
      <Form inline className="flex-grow-1">
        <FormControl
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          style={{ width: '300px' }} 
        />
      </Form>

     
      <Nav className="ml-auto nav-wrap" >
        <Nav.Link href="#"><FaBell /></Nav.Link>
        <Dropdown alignRight >
        <Dropdown.Toggle variant="success" id="dropdown-user-icon">
        <FaUser />
          </Dropdown.Toggle>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;