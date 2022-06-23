/* eslint-disable react/function-component-definition */
import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>React Typescript Tutorial</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
