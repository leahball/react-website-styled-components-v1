import React from "react";
import Image1 from "./../../../images/strength-sm.png";
import Image2 from "./../../../images/jet-propulsion-sm.png";
// import Highlight1 from "./../../../images/chaad.png";
import Image3 from "./../../../images/coral-sml.png";

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
  PortfolioListImages,
  HighlightWrapper,
  // HighlightCard,
  HighlightImage,
  HighlightIcon,
  HighlightTitle,
  // HighlightH2,
  // HighlightP,
  // HighlightCol1,
  // HighlightCol2,
  PortfolioListWrapper,
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
              unique individual and species specific ways. For example—humans
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
            <PortfolioP>This is a work in progress! Stay tuned!!!!</PortfolioP>
          </PortfolioTextWrapper>
        </PortfolioMainContent>
        <HighlightWrapper>
          <HighlightTitle>Highlights . . . wip</HighlightTitle>

          {/* <HighlightCol1>
            <HighlightCard>
              <HighlightImage>
                <HighlightIcon src={Highlight1} />
              </HighlightImage>

              <HighlightH2>Built an API</HighlightH2>
              <HighlightP>
                Using Cheerio, Node, Express I created an API that scraped
                popular science news magazines for all relevant Octopus content
                to populate a news tab.
              </HighlightP>
            </HighlightCard>
          </HighlightCol1>
          <HighlightCol2>
            <HighlightCard>
              <HighlightImage>
                <HighlightIcon src={Highlight1} />
              </HighlightImage>

              <HighlightH2>Redux Store</HighlightH2>
              <HighlightP>
                Utilizing Procreate I drew all related artwork for the site.
                Overall it was 10 illustrations. I then created a design system
                and website mock-up in Figma utilizing variants, prototypes and
                interactions.
              </HighlightP>
            </HighlightCard>
          </HighlightCol2>

          <HighlightCol1>
            <HighlightCard>
              <HighlightImage>
                <HighlightIcon src={Highlight1} />
              </HighlightImage>

              <HighlightH2>Figma</HighlightH2>
              <HighlightP>
                Utilizing Procreate I drew all related artwork for the site.
                Overall it was 10 illustrations. I then created a design system
                and website mock-up in Figma utilizing variants, prototypes and
                interactions.
              </HighlightP>
            </HighlightCard>
          </HighlightCol1>

          <HighlightCol2>
            <HighlightCard>
              <HighlightImage>
                <HighlightIcon src={Highlight1} />
              </HighlightImage>

              <HighlightH2>Procreate + Storyboard</HighlightH2>
              <HighlightP>
                Utilizing Procreate I drew all related artwork for the site.
                Overall it was 10 illustrations. I then created a design system
                and website mock-up in Figma utilizing variants, prototypes and
                interactions.
              </HighlightP>
            </HighlightCard>
          </HighlightCol2> */}
        </HighlightWrapper>
        <PortfolioListWrapper>
          <PortfolioListItems>
            <PortfolioListH>Surprising Facts About Octopuses</PortfolioListH>
            <PortfolioList>
              <span className="title">Regeneration:</span> When an Octopus loses
              a tentacle, it grows back as good as new in an amazing feat of
              regeneration-- in just 130 days! During a process called
              morphallaxis, existing tissue is rearranged to allow for new
              tissue to grow--suckers, chromatophores and all!
            </PortfolioList>
            <PortfolioList>
              <span className="title">Jet Propulsion:</span> To travel at super
              fast speeds , an octopus will fill its mantle—which houses vital
              organs—with water then quickly expel the water out of another body
              part—called the siphon—often with a cloud of ink imbued with
              chemicals. This movement allows octopuses to either subdue,
              distract or impair their foes.
            </PortfolioList>
            <PortfolioList>
              <span className="title">Camouflage:</span> Masters of change, the
              body of an Octopus is all protean—meaning all possibility! And
              that does not stop at their shape! They can also camouflage using
              ink-filled sacs called chromatophores and are the only known
              animal to control the texture of their skin to create spikes,
              ridges, and bumps.
            </PortfolioList>
            <a href="/" target="_blank" rel="noreferrer">
              Learn more here!
            </a>
          </PortfolioListItems>
          <PortfolioListImages>
            <PortfolioImg
              src={Image2}
              alt="Octopus jetting off with a cloud of ink in their tale"
            />
          </PortfolioListImages>
        </PortfolioListWrapper>
      </PortfolioGrid>
    </>
  );
};

export default Octopus;
