import React from 'react';
import { Card, Image } from "semantic-ui-react";

const AlbumCard = ({name, height, mass, created}) => (
  <Card>
    <Image />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">
          Height: {height}<br/>
          Created: {created}
        </span>
      </Card.Meta>
      
    </Card.Content>
    <Card.Content extra>
      <span>
        Mass: {mass}
      </span>
    </Card.Content>
  </Card>
);

export default AlbumCard;