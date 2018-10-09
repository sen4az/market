import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as albumsActions from '../actions/albums';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (albums, filterBy) => {
  switch (filterBy) {
    case "all":
      return albums;
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

const mapStateToProps = ({albums}) => ({
  albums: sortBy(albums.items, albums.filterBy),
  isReady: albums.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(albumsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
