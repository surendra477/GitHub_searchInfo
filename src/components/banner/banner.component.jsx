import React, { Fragment } from "react";
import ReactLogo from "../../asset/octocat.svg";

// Styling
import { HeadingStyle } from "./banner.style";
import { LogoStyle } from "./banner.style";

const Banner = () => {
  return (
    <Fragment>
      <header>
        <HeadingStyle>
          Get GitHub Info
          <LogoStyle src={ReactLogo} alt="GitHub Logo" />
        </HeadingStyle>
      </header>
    </Fragment>
  );
};

export default Banner;
