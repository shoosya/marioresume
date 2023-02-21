import styled from "styled-components";

const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  flex-direction: row;
`;

const NesContainer = (props) => (
  <Container className="nes-container with-title is-centered">
    <p className="title">{props.title}</p>
    {props.children}
  </Container>
);

export default NesContainer;
