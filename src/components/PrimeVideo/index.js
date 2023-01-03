// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.filter(
    eachValue => eachValue.categoryId === 'ACTION',
  )
  const comedyList = moviesList.filter(
    eachValue => eachValue.categoryId === 'COMEDY',
  )
  return (
    <div className="prime-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="slider-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionList} />
        <h1 className="slider-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
