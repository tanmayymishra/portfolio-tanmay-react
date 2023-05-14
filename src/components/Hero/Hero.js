import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        MY Personal Portfolio
      </SectionTitle>
      <SectionText>
        Building Interactive Websites/Apps with the help of RectJS.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/tanmayymishra/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
