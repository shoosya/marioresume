import styled from "styled-components";
import NesContainer from "./nes-container";
import FlexContainer from "./flex-container";

const FlexItem = styled.div`
  flex-grow: ${(props) => props.flexgrow};
  margin-left: ${(props) => props.marginleft};
  max-width: ${(props) => props.maxwidth};
`;

const NesItem = styled.div`
  text-align: left;
`;

const Bio = () => (
  <NesContainer title={"It's a Me"}>
    <FlexContainer justify="space-evenly">
      <FlexItem>
        <NesItem>
          <p>
            <strong>Mario</strong>
            <br />
            <strong>July 9, 1981</strong>
            <br />
            <strong>Mushroom Kingdom</strong>
          </p>
          <ul className="nes-list is-circle">
            <li>Carpenter</li>
            <li>Plumber</li>
            <li>Part-time superhero</li>
          </ul>
        </NesItem>
      </FlexItem>
      <FlexItem flexgrow="2" marginleft="5rem" maxwidth="70%">
        <NesItem>
          <p>
            Mario ipsum RGB mushroom 1-up. Koopa paratroopa fire flower hammer
            bro reset 1985 B-button, red shell 1985 select button. 1985 platform
            B-button super mushroom lava Mario Bros Mario bullet bill lakitu
            fire bar B-button, koopa paratroopa Japan koopa paratroopa.
            Bottomless pit buzzy beetle super Luigi Mushroom Kingdom red shell
            cheep cheep spiny super mushroom PAL, piranha plant time bridge,
            brick.
          </p>
        </NesItem>
        <NesItem>
          <ul className="nes-list is-circle">
            <li>
              <strong>Carpenter</strong>
            </li>
          </ul>
          <p>
            Reset cloud koopa troopa B-button invincible Mario, bill blaster
            invincible Mario platform plumber Mushroom Kingdom, invincible Mario
            super mushroom hammer bro A-button, fireball power B-button spiny.
            Game over start button cheep cheep bullet bill Mario power life,
            bullet bill invincible Luigi blooper red shell 1-up! Vine fireball
            reset piranha plant Bowser B-button pipe goomba sprite. Fire bar
            super Luigi cloud koopa troopa game over Mario Bros bridge! Mario
            Bros podoboo pipe life!
          </p>
        </NesItem>
        <NesItem>
          <ul className="nes-list is-circle">
            <li>
              <strong>Plumber</strong>
            </li>
          </ul>
          <p>
            Game pak start button red shell Japan! Invincible Mario blooper
            green shell bridge Mario bullet bill. Lakitu Luigi coin castle RGB
            bottomless pit Nintendo Entertainment System, hammer bro super
            mushroom Nintendo Entertainment System fire flower cloud super
            mushroom super Luigi life podoboo, Bowser Luigi NES platform,
            starman B-button piranha plant? Vine B-button.
          </p>
        </NesItem>
      </FlexItem>
    </FlexContainer>
  </NesContainer>
);

export default Bio;
