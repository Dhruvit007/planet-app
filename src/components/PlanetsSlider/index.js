import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem id={eachPlanet.id} eachPlanet={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
