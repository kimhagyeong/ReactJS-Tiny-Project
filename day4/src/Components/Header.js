import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;
const HeadingOne = styled.h1`
  font-weight: 500;
  font-size: 25px;
`;
const List = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;
const Item = styled.li`
  background-color: ${(props) => (props.current ? "#eebe13" : "white")};
  color: ${(props) => (props.current ? "white" : "black")};
  font-weight: 400;
  margin-right: 20px;
`;

const content = ({ location: { pathname } }) => (
  <Header>
    <HeadingOne>Coin Explorer</HeadingOne>
    <List>
      <Item current={pathname === "/"}>
        <Link to="/">Prices</Link>
      </Item>
      <Item current={pathname === "/exchanges"}>
        <Link to="/exchanges">Exchanges</Link>
      </Item>
      <Item current={pathname === "/coins"}>
        <Link to="/coins">Coins</Link>
      </Item>
    </List>
  </Header>
);

export default withRouter(content);
