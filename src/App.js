import "nes.css/css/nes.min.css";
import styled from "styled-components";
import Hero from "./Components/hero";
import Bio from "./Components/bio";
import Testimonials from "./Components/testimonials";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  width: 70%;
`;

function App() {
  return (
    <Container className="App">
      <Hero></Hero>
      <Bio></Bio>
      <Testimonials></Testimonials>
    </Container>
  );
}

export default App;
