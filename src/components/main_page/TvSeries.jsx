import React from 'react'
import DisplayMovie from '../DisplayMovie'

const TvSeries = ({fetchingUrl, fetchGenresList}) => {
  return (<div>
    <DisplayMovie fetchingUrl={fetchingUrl} fetchGenresList={fetchGenresList} />
</div>)
}

export default TvSeries