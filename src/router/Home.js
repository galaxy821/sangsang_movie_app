import { Component } from "react";
import axios from "axios";
import '../style/Home.css';
import Movie from "../component/Movie";
// import Header from "../component/Header";
import MainBanner from "../component/MainBanner";
import LastestMovie from "../component/LastestMovie";
import Footer from "../component/Footer";

class Home extends Component {
  state = {
    isLoading: true /* before data Loading state*/,
    movies: [] /* movie data */,
    lastestMovies : [], 
    mainBannerImgUrl:[]
  };

  getMovieData = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=like_count&limit=10"
    );
    
    const imageURL = [
        "https://wallpapers.moviemania.io/desktop/movie/299536/41dca8/avengers-infinity-war-desktop-wallpaper.jpg?w=2032&h=1148",
        "https://wallpapers.moviemania.io/desktop/movie/27205/286e02/inception-desktop-wallpaper.jpg?w=2032&h=1148",
        "https://wallpapers.moviemania.io/desktop/movie/293660/7c016e/deadpool-desktop-wallpaper.jpg?w=2032&h=1148"
    ];
    let movieRankCount = 0;
    const copyMovies = movies.map((item) => {
      movieRankCount++;
      return { ...item, rankUp: movieRankCount };
    });
    this.setState({ movies: copyMovies, isLoading: false, mainBannerImgUrl :imageURL});
    
  };

  getLastMovieData = async () =>{
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year&order_by=desc&limit=50"); 
    this.setState({ lastestMovies : movies});
    console.log(this.state.lastestMovies);
  }

  componentDidMount() {
    this.getMovieData();
    this.getLastMovieData();
  }

  movieJSX = (movie) => {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        image={movie.medium_cover_image}
        rankUp={movie.rankUp}
      />
    );
  };

  lastestMovieJSX = (movie)=>{
    return(
      <LastestMovie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title ={movie.title}
        image = {movie.medium_cover_image}
      />
    );
  }
  render() {
    // const {isLoading} = this.state;
    const { movies, lastestMovies } = this.state;
    return (
      <div className="homeContent">
        {/* <Header /> */}
        <section className="mainBanner">
          <MainBanner imageUrl={this.state.mainBannerImgUrl}/>
        </section>
        <section className="rankBox">
          <h3 className="rankTitle">인기 영화</h3>
          <div className="boxInner">{movies.map(this.movieJSX)}</div>
        </section>
        <section className="lastestBox">
          <h3 className="lastestTitle">최신 영화</h3>
          <div className="boxInner">{lastestMovies.map(this.lastestMovieJSX)}</div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Home;
