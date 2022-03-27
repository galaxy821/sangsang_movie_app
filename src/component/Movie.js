// import { Component } from "react";
// import PropTypes from "prop-types";
import "../style/Movie.css"
import {Link} from 'react-router-dom';

const Movie = (props) => {
  /*
  state = {
    id: "",
    title: "",
    year: "",
    summary: "",
    image: ""
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      id: nextProps.id,
      title: nextProps.title,
      year: nextProps.year,
      summary: nextProps.summary,
      image: nextProps.image,
      rank: nextProps.rankUp
    };
  }*/

  // componentDidMount() {}
/*
  render() {
    
  }*/
  const {year, title, summary, image, rankUp} = props;
  return (
    <Link to={{pathname:"/movie-detail", state:{year, title, summary, image}}}>
      <article className="movie_item">
        <div>
          <img
            src={image}
            alt={title}
            className="movie_img"
          ></img>
          <div className="movie_rankup">
            <p>{rankUp}</p>
          </div>
          <div className="movieTitle"><p>{title}</p></div>
        </div>
      </article>
    </Link>
  );
}
/*
Movie.PropTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};
*/
export default Movie;
