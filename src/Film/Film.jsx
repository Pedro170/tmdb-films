import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import styles from './Film.module.css'

const Film = () => {
    const img = 'https://image.tmdb.org/t/p/w500'

    const[film, setFilm] = React.useState([]);
    const[genres, setGneres] = React.useState([])


    const { id } = useParams()

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=719fbd9994e6f0b7f1d4738980e75453`)
            .then((response) => {
                const data = response.data;
                console.log(data);
                setGneres(data.genres)
                setFilm(data)
            }).catch((error) => {
                console.log(error)
            });
    }, [id])


    return (
        <>
            <Header />
            <div className={ styles.banner }>
                <figure className={ styles.figure }>
                    <img className={ styles.img } src={ img + film.poster_path } alt={ film.title } />
                </figure>

                <div className={styles.boxText }>
                    <h2 className={ styles.title }>{ film.title } ({ film.release_date })</h2>

                    <div className={ styles.line }>
                        { film.release_date }
                        <span style={{ textTransform: 'uppercase' }} >({film.original_language})</span>

                        <p>{genres.map((genre, id) => <span style={{ marginRight: '.2rem' }} key={ id }> {genre.name}, </span>)}</p>
      
                        {film.runtime}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }} >
                        <div className={styles.avaliacao}>
                            <p>{ film.vote_average }</p>
                        </div>
                        <small>Avaliação dos <br /> usuários</small>
                    </div>

                    <div>
                        <strong >Sinopse</strong>
                        <p style={{ marginTop: '.8rem' }}>{ film.overview }</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Film;
