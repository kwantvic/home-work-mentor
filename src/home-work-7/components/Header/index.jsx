import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>
        <Link to="/">React Blog</Link>
      </h2>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as={NavLink} eventKey="/home" to="/">
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} eventKey="/home" to="/about">
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} eventKey="/home" to="/profile">
            Профиль
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
