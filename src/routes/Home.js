import Movie from '../components/Movie';
import {useState, useEffect} from 'react';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch('https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year');
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
    <div className="App">
        {loading ? <h1>Loading..</h1> : movies.map((item) => (
        <Movie 
            coverImg={item.medium_cover_image} 
            title={item.title} 
            key = {item.id} 
            summary = {item.summary} 
            genres = {item.genres}
            id = {item.id}>
        </Movie>))}
    </div>
  );
}

export default Home;