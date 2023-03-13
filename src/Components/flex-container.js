import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
`;

export default FlexContainer;
