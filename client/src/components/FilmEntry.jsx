import React from 'react';

class FilmEntry extends React.Component {

  render() {
    return (
      <div className="film-entry">
        <img className="icon" src="{ this.props.icon }" />
        <p className="film-name"> { this.props.film } </p>
        <p className="showtimes-link"> { this.props.showtimesLink } </p>
        { this.props.children }
      </div>
    );
  }

}

export default FilmEntry;