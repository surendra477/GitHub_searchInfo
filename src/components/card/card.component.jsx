import React from "react";

// import Style
import { MainDiv } from "./card.style";
import { InfoStyle } from "./card.style";
import { AvatarStyle } from "./card.style";

const Card = ({ profile }) => {
  return (
    <MainDiv>
      {/* Avatar */}
      <div>
        <AvatarStyle src={profile.avatar_url} alt={profile.name} />
      </div>
      {/* Info */}
      <InfoStyle>
        {/* Name */}
        <div>Name: {profile.name}</div>
        {/* Github Link */}
        <div>
          GitHub Link:{" "}
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {profile.html_url}
          </a>
        </div>
        {/* email */}
        <div>Email: {profile.Email}</div>
        {/* Location */}
        <div>Location:{profile.location}</div>
        {/* Public repo */}
        <div>Public repos: {profile.public_repos}</div>
        {/* Info */}
        <div>Bio: {profile.bio}</div>
      </InfoStyle>
    </MainDiv>
  );
};

export default Card;
