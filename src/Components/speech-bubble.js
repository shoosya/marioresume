import styled from "styled-components";

const SpeechItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconItem = styled.i`
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
`;

const ShowIconIfLeft = (props) => {
  return props.direction === "left" ? (
    <IconItem className={`${props.icon}`} marginright="2rem"></IconItem>
  ) : null;
};

const ShowIconIfRight = (props) => {
  return props.direction === "right" ? (
    <IconItem className={`${props.icon}`} marginleft="2rem"></IconItem>
  ) : null;
};

const SpeechBubble = (props) => (
  <SpeechItem className={`message -${props.direction}`}>
    <ShowIconIfLeft {...props} />
    <div className={`nes-balloon from-${props.direction}`}>
      <p>{props.children}</p>
    </div>
    <ShowIconIfRight {...props} />
  </SpeechItem>
);

SpeechBubble.defaultProps = {
  direction: "left",
  icon: "nes-bcrikko",
};

export default SpeechBubble;
