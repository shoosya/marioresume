import NesContainer from "./nes-container";

import SpeechBubble from "./speech-bubble";
import SpeechContainer from "./speech-container";

const Testimonials = () => (
  <NesContainer title={"Testimonials"}>
    <SpeechContainer>
      <SpeechBubble icon="nes-pokeball">
        Cloud game pak Japan jump brick slide.
      </SpeechBubble>
      <SpeechBubble icon="nes-squirtle" direction="right">
        Select button fire flower swim bullet bill buzzy beetle swim pixel.
      </SpeechBubble>
    </SpeechContainer>
  </NesContainer>
);

export default Testimonials;
