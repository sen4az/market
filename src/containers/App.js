import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as albumsActions from '../actions/albums';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (albums, filterBy) => {
  switch (filterBy) {
    case "mass_high":
      return orderBy(albums, "mass", "desc");
    case "mass_low":
      return orderBy(albums, "mass", "asc");
    case "name":
      return orderBy(albums, "name", "asc");
    default:
      return albums;
  }
}

const filterAlbums = (albums, searchQuery) => albums.filter(i =>
    i.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
);


const searchAlbums = (albums, filterBy, searchQuery) => {
  return sortBy(filterAlbums(albums, searchQuery), filterBy);
}

const mapStateToProps = ({albums, filter}) => ({
  albums: albums.items && searchAlbums(albums.items, filter.filterBy, filter.searchQuery),
  isReady: albums.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(albumsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
