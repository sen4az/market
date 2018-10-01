import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlbums } from './actions/albums';

class App extends Component {
  render() {
    const { albums } = this.props.albums;
    const { setAlbums} = this.props;
    const newAlbums = [
      {
        id: 2,
        title: 'новый Альбом'
      }
    ]
    return (
      <div className="container">
        <h1>{albums[0].title}</h1>
        <button onClick={ () => setAlbums(newAlbums) }>SET NEW ALBUMS</button>
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setAlbums: albums => dispatch(setAlbums(albums))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
