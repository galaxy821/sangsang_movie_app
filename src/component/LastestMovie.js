import '../style/LastestMovie.css'

const LastestMovie = props =>{
    // const {id, title, image, year} = props;
    const {title, image, year} = props;
    return(
        <>
        <article className="movie_item">
          <div>
            <img
              src={image}
              alt={title}
              className="movie_img"
            >
            </img>
            <p className='movie_title'>{title}<br/>({year})</p>
          </div>
        </article>
      </>
    );
}

export default LastestMovie;