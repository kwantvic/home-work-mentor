import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <h2>
        <a href="/">React Blog</a>
      </h2>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/" eventKey="/home" to="/">
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" eventKey="/home" to="/about">
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile" eventKey="/home" to="/profile">
            Профиль
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
