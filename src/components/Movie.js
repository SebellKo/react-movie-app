import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({id, coverImg, title, summary, genres}) {
    return <div>
    <img src={coverImg}></img>
    <Link to ={`/movie/${id}`}>{title}</Link>
    <p>{summary}</p>
    <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
    </ul>
</div>;
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired
}

export default Movie;