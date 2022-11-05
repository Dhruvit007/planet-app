import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet
  return (
    <div className="planet-container">
      <h1 className="main-heading">PLANETS</h1>
      <img src={imageUrl} className="planet-image" alt={`planet ${name}`} />
      <h1 className="sub-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
