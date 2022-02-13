import React from "react";
import {
  PortfolioGrid,
  PortfolioContent,
  PortfolioH1,
  PortfolioH2,
  PortfolioP,
  PortfolioSecondaryImages,
  PortfolioListItems,
  PortfolioListH,
  PortfolioList,
} from "../PortfolioPageElements";

import { Button } from "../../../components/ButtonElement";

const Octopus = () => {
  return (
    <>
      <PortfolioGrid>
        <PortfolioContent>
          <PortfolioH1>Octopus Galaxy</PortfolioH1>
          <PortfolioH2>
            An interactive educational game about our fascinating underwater
            neighbors!
          </PortfolioH2>
          <PortfolioP>
            What makes me excited and optimistic is that everything on this
            planet is made of the same stuff just arranged for us in our own
            unique individual and species specific ways. While designing this
            game I wanted that to both engage and comfort the player. Inspired
            by the movie Arrival, a few amazing Octopus books, and my own
            cyclical life processes, I wanted to spend time studying these many
            armed friends while also learning React, Javascript and Redux.
          </PortfolioP>
          <PortfolioSecondaryImages>
            <img src="" alt="" class="secondary-image" />
            <img src="" alt="" class="secondary-image" />
            <img src="" alt="" class="secondary-image" />
          </PortfolioSecondaryImages>
          <PortfolioListItems>
            <PortfolioListH>Not sure what</PortfolioListH>
            <PortfolioList>
              Here is a challenge I want to highlight and how I overcame it. It
              wasn't easy but I did it.
            </PortfolioList>
            <PortfolioList>
              Here is a challenge I want to highlight and how I overcame it. It
              wasn't easy but I did it.
            </PortfolioList>
            <PortfolioList>
              Here is a challenge I want to highlight and how I overcame it. It
              wasn't easy but I did it.
            </PortfolioList>
            <PortfolioList>
              Here is a challenge I want to highlight and how I overcame it. It
              wasn't easy but I did it.
            </PortfolioList>
          </PortfolioListItems>
          <Button>Check it out here!</Button>
        </PortfolioContent>
      </PortfolioGrid>
    </>
  );
};

export default Octopus;
