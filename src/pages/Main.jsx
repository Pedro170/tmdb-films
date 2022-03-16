import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import styles from './Main.module.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
//import Pagination from '../component/Pagination';

const Main = () => {

    const img = 'https://image.tmdb.org/t/p/w500'

    const { genrer } = useParams();

    
    
    /* 
    const startIndex = currentPage * filmsPage;
    const endIndex = startIndex + filmsPage;
    const currentFilms = films.slice(startIndex, endIndex)
    */
   
    const [ genres, setGneres ] = useState( [] );
    const [ films, setFilms ]   = useState( [] );
    

    const selectedGenres = ( genrer ) ? genrer.split( '-' ) : [];

    useEffect(() => {
        //console.log( genrer );
        const url = ( genrer ) 
                        ? `https://api.themoviedb.org/3/movie/popular?api_key=719fbd9994e6f0b7f1d4738980e75453&with_genres=${ genrer}` 
                        : `https://api.themoviedb.org/3/movie/popular?api_key=719fbd9994e6f0b7f1d4738980e75453`
        
        axios.get( url )
            .then(response => {
                setFilms(response.data.results)
            }).catch(error => {
                console.log(error);
            });

        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=719fbd9994e6f0b7f1d4738980e75453')
            .then(response => {
                setGneres(response.data.genres)
            }).catch(error => {
                console.log(error);
            })
    }, [ genrer ]);


    /* const handleGenreChange = ( genreId ) => {
        setGneres(( prevState ) => prevState.filter( id => id !== genreId ) )
    } */

    /* const handleGenreChange = ( genrer ) => {
        setGneres(( genre ) => [...genre] )
    } */

     /* const handleGenreChange = ( genreId ) => {
        setGneres(( prevState ) => prevState.filter( id => id !== genreId ) )
    } */

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className='box-text'>
                    <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
                </div>

                <div className='box-button'>
                    <span style={{ marginBottom: '10px' }}>Filtre por: </span>
                    <div className='buttons'>
                        {genres.map(({ id, name }) => {
                            const _active   = selectedGenres.includes( String( id ) );
                            const _link     = ( _active ) ? selectedGenres.filter( g => g !== String( id ) ).join('-') : [].concat( selectedGenres, id ).join('-');

                            return (
                                <Link to={`/genrer/${_link}`} key={ id } className='item-card'>
                                    <button className={`btn ${_active ? 'active' : '' }`}>
                                        { name }
                                        { id }
                                    </button>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* <button onClick={ () => {setActive(!active)} }>
                    {active ? 'Botão Ativo' : 'Botão Inativo'}
                </button> */}
            </main>

            <section className='box-section'>
                <div className='grid-card'>
                    { films.length > 0 && films.map(({ id, title,  poster_path, release_date, genre_ids }) => {
                        return (
                            <Link to={`/film/${id}`} key={ id } className='item-card'>
                                <img src={ img + poster_path } alt={ title } style={{ width: '100%', borderRadius: '.4rem', marginBottom: '.4rem' }} />
                                <strong>{ title }</strong>
                                <p>{ release_date }</p>
                                {/* <ul>
                                    { genre_ids.map((gid) => <li key={ gid }>{ gid }</li>) }
                                </ul> */}
                            </Link>
                        )
                    }) }
                </div>
            </section>

            {/* <Pagination pages={ pages } setCurrentPage={ setCurrentPage } /> */}
        </>
    )
}

export default Main
