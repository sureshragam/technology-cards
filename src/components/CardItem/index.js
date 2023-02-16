// Write your code here.
import './index.css'

const CardItem = props => {
  const {title, description, imgUrl, className} = props

  return (
    <li className={className}>
      <h1 className="title-heading">{title}</h1>
      <p className="description-paragraph">{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
