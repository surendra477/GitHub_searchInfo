import React from "react";
import Card from "../card/card.component";

// import styles
import { CardListStyle } from "./card-list.style";

const CardList = (userData) => {
  return (
    <CardListStyle>
      {userData.map((user) => (
        <Card key={user.id} profile={user} />
      ))}
    </CardListStyle>
  );
};

export default CardList;
