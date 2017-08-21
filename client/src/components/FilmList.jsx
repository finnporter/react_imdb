import React from 'react';
import FilmEntry from './FilmEntry.jsx'

class FilmList extends React.Component {

  render() {
    const filmEntryComponents = this.props.data.map(function (film) {
      return (
        <FilmEntry key = { film.id } film = { film.film }> { film.showtimesLink } </FilmEntry>
      )
    });

    return (
      <div>
        { filmEntryComponents}
      </div>
    )
  }
}

export default FilmList;