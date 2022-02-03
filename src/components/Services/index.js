import React from "react";
import Icon1 from "../../images/Icon1.svg";
import Icon2 from "../../images/Icon2.svg";
import Icon3 from "../../images/Icon3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Careful Execution</ServicesH2>
          <ServicesP>
            Understanding the creative process from discovery through contract
            to execution of code takes organization, communication and
            curiosity. With experience at every step of the way I know how to
            get things done.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Expert Eye</ServicesH2>
          <ServicesP>
            With years of experience in color stories, identity design,
            marketing and promotional design, I can craft solutions that will
            feel fully unique and all your own.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Innovation as Ritual</ServicesH2>
          <ServicesP>
            I wasn't born creative, no one is, I developed the muscle over many
            trials and experiments. I have come to love the process, so when
            things get challenging I light the way with process.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
