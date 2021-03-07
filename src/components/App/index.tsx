import React from "react";
import styled from "styled-components";

const zIndex = {
  header: 2,
  main: 1,
  footerNav: 2
};

export const App = () => {
  return (
    <Container>
      <Header>Header</Header>
      <Wrapper>
        <Main>
          {[...Array(100).keys()].map((i: number) => (
            <div key={i}>{`Main ${i.toString().padStart(2, "0")}`}</div>
          ))}
        </Main>
        <FooterNav>FooterNav</FooterNav>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  -webkit-overflow-scrolling: auto;
`;

const Header = styled.header`
  border-bottom: 1px solid #222;
  background-color: #fff;
  height: 50px;
  width: 100%;
  z-index: ${zIndex.header};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: 50px;
  vertical-align: middle;
  background-color: rgb(230, 240, 250);
`;

const Main = styled.main`
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #fff;
  width: 100vw;
  height: 100%;
  z-index: ${zIndex.main};
  -webkit-overflow-scrolling: touch;
`;

const FooterNav = styled.footer`
  border-top: 1px solid #222;
  background-color: rgb(246, 250, 230);
  width: 100vw;
  height: 50px;
  position: fixed;
  z-index: ${zIndex.footerNav};
  bottom: 0;
`;
