import React from 'react';
import FilmList from '../components/FilmList.jsx';

//const showtimesLink = "Showtimes";
const icon = "../public/ribbon.png";
const filmData = [
{ showtimesLink: "Showtimes", id: 1, film: "A Ghost Story" }, 
{ showtimesLink: "Showtimes", id: 2, film: "American Made"},
{ showtimesLink: "Showtimes", id: 3, film: "Beauty and the Beast"},
{ showtimesLink: "Showtimes", id: 4, film: "Atomic Blonde"},
{ showtimesLink: "Showtimes", id: 5, film: "Boss Baby"},
{ showtimesLink: "Showtimes", id: 6, film: "Dunkirk"},
{ showtimesLink: "Showtimes", id: 7, film: "The Hitman's Bodyguard"}
];


class MainContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: filmData
    }
  }

  render() {
    return(
      <div>
      MainContainer is here
      <FilmList data={this.state.filmData} />
      </div>
    );
  }
}

export default MainContainer;