import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar bg="light" style={{ paddingLeft: 20 }}>
      <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
    </Navbar>
  );
}
