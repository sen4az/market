import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Card } from "semantic-ui-react";
import { setAlbums } from './actions/albums';
import axios from 'axios';
import MenuComponent from "./components/Menu";
import AlbumCard from './components/AlbumCard';


class App extends Component {
  componentWillMount() {
    const {setAlbums} = this.props
    axios.get("https://swapi.co/api/people/").then(response => {
      //console.log(response.data.aliases);
      setAlbums(response.data.results);
    });
  }

  render() {
    const {albums, isReady} = this.props;
    return <Container>
        <MenuComponent />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : albums.map(item => (
                <AlbumCard key={item.birth_year} {...item} />
              ))}
        </Card.Group>
      </Container>;
  }
}

const mapStateToProps = ({albums}) => ({
  albums: albums.items,
  isReady: albums.isReady
});

const mapDispatchToProps = dispatch => ({
  setAlbums: albums => dispatch(setAlbums(albums))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
