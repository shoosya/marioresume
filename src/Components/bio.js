import styled from "styled-components";
import NesContainer from "./nes-container";

const NesItem = styled.div`
  text-align: left;
`;

const Bio = () => (
  <NesContainer title={"It's a Me"}>
    <NesItem>
      <p>Mario</p>
      <p>July 9, 1981</p>
      <p>Mushroom Kingdom</p>
      <ul>
        <li>Carpenter</li>
        <li>Plumber</li>
        <li>Part-time superhero</li>
      </ul>
    </NesItem>
    <NesItem>
      <p>Mario</p>
      <p>July 9, 1981</p>
      <p>Mushroom Kingdom</p>
      <ul>
        <li>Carpenter</li>
        <li>Plumber</li>
        <li>Part-time superhero</li>
      </ul>
    </NesItem>
  </NesContainer>
);

export default Bio;
