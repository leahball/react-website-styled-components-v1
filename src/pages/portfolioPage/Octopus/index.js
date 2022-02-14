import React from "react";
import Image1 from "./../../../images/strength-sm.png";
import {
  PortfolioGrid,
  PortfolioMainContent,
  PortfolioHeaderContent,
  PortfolioH1,
  PortfolioH2,
  PortfolioP,
  PortfolioSecondaryImages,
  PortfolioImg,
  PortfolioListItems,
  PortfolioListH,
  PortfolioList,
  PortfolioTextWrapper,
  HeaderTextWrapper,
} from "../PortfolioPageElements";

const Octopus = () => {
  return (
    <>
      <PortfolioGrid>
        <PortfolioHeaderContent>
          <HeaderTextWrapper>
            <PortfolioH1>Octopus Galaxy</PortfolioH1>
            <PortfolioH2>An interactive educational game about our</PortfolioH2>
            <PortfolioH2>fascinating underwater neighbors!</PortfolioH2>
          </HeaderTextWrapper>
        </PortfolioHeaderContent>
        <PortfolioMainContent>
          <PortfolioSecondaryImages>
            <PortfolioImg src={Image1} alt="illustration of an Octopus" />
          </PortfolioSecondaryImages>
          <PortfolioTextWrapper>
            <PortfolioP>
              What makes me excited and optimistic is that everything on this
              planet is made of the same stuff just arranged for us in our own
              unique individual and species specific ways. For example--humans
              have retinal cells behind our eyes, which are highly specialized
              cells for visual perception, amazingly, Octopuses have them{" "}
              <span className="highlight">ALL OVER</span> their skin! Take a
              moment to imagine that? What possibilities does seeing with your
              skin open up?{" "}
              <span className="highlight">What does that even feel like?</span>{" "}
              While designing this game I wanted to both engage and comfort the
              player through wonder at the world around us. Inspired by the
              movie Arrival, two amazing Octopus books,{" "}
              <a
                href="https://www.goodreads.com/book/show/28116739-other-minds"
                target="_blank"
                rel="noreferrer"
              >
                this one
              </a>
              , and{" "}
              <a
                href="https://www.goodreads.com/book/show/22609485-the-soul-of-an-octopus"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                this one
              </a>
              , and my own cyclical life processes, I wanted to spend time
              studying these many armed friends while also learning{" "}
              <span className="highlight">React, Javascript and Redux.</span>
            </PortfolioP>
            <PortfolioP>
              While looking for coding challenges to practice I found a memory
              game using simple vanilla javascript. While I had some very basic
              experience with it, this challenge was my first time using xyz. I
              used procreate to draw the first images and a for loop to create
              the card board. There were some bugs in this first round:
            </PortfolioP>
          </PortfolioTextWrapper>

          <PortfolioListItems>
            <PortfolioListH>Surprising Facts About Octopuses</PortfolioListH>
            <PortfolioList>
              The first game I built was in vanilla javascript, .
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
        </PortfolioMainContent>
      </PortfolioGrid>
    </>
  );
};

export default Octopus;
