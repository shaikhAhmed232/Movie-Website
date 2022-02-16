import React, {useEffect} from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"

const Genres = ({fetchGenresList, selectedGenres, setSelectedGenres, genres, setGenres, setPage}) => {
  const fetchGenres = async (fetchGenresListUrl) => {
    const {data} = await axios.get(fetchGenresListUrl);
    setGenres(data.genres)
  }

  const addGenre = (genre) => {
    setSelectedGenres([...selectedGenres, genre])
    setGenres(genres.filter((g) => {
      return (g.id !== genre.id)
    }))
    setPage(1)
  }

  const removeGenre = (genre) => {
    setSelectedGenres(selectedGenres.filter(g => {
      return (g.id !== genre.id)
    }))
    setGenres([...genres, genre])
    setPage(1)
  }

  useEffect(() => {
    fetchGenres(fetchGenresList)

    return () => {
      setGenres([])
    }
  }, [fetchGenresList])
  return (
    <div className="genres-list">
      {
        selectedGenres.map((selectedGenre) => {
          return (
            <div className="genre-pill selectedGenrespill px-lg-4 px-2 d-flex justify-content-between align-items-center bg-primary" style={selectedGenre.name.length >=10 ? {width: "20%"} : {width: '13%',}} key={selectedGenre.id}>
              {selectedGenre.name}
              <div className="remove-genre" onClick={() => removeGenre(selectedGenre)}>
              <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          )
        })
      }
      {
        genres.map((genre) => {
          return (
            <div className="genre-pill" key={genre.id} onClick={() => addGenre(genre)}>
              {genre.name}
            </div>
          )
        } )
      }
    </div>
  )
}

export default Genres