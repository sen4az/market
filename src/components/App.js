import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Card } from "semantic-ui-react";
import axios from 'axios';

import MenuComponent from "./Menu";
import AlbumCard from './AlbumCard';
import Filter from '../containers/Filter';


class App extends Component {
  componentWillMount() {
    const {setAlbums} = this.props
    axios.get("https://swapi.co/api/people/").then(response => {
      console.log(response.data.results);
      setAlbums(response.data.results);
    });
  }

  render() {
    const {albums, isReady, setFilter} = this.props;
    return <Container>
        <MenuComponent />
        <Filter/>
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : albums.map((item, i) => (
                <AlbumCard key={i} {...item} />
              ))}
        </Card.Group>
      </Container>;
  }
}

export default App;
