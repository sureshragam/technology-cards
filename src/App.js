import './App.css'
import CardItem from './components/CardItem/index'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1 card',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2 card',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3 card',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4 card',
  },
]

const App = () => (
  <div>
    <h1>Learn 4.0 Technologies</h1>
    <p>
      Get trained by alumni of IITS and top companies like Amazon Microsoft,
      Intel, Nvidia, Qualcomm etc. Learn directly from professionals involved in
      product development
    </p>
    <ul className="cards-container">
      <CardItem
        title={cardsList[0].title}
        description={cardsList[0].description}
        imgUrl={cardsList[0].imgUrl}
        className={cardsList[0].className}
        key={cardsList[0].id}
      />
      <CardItem
        title={cardsList[1].title}
        description={cardsList[1].description}
        imgUrl={cardsList[1].imgUrl}
        className={cardsList[1].className}
        key={cardsList[1].id}
      />
      <CardItem
        title={cardsList[2].title}
        description={cardsList[2].description}
        imgUrl={cardsList[2].imgUrl}
        className={cardsList[2].className}
        key={cardsList[2].id}
      />
      <CardItem
        title={cardsList[3].title}
        description={cardsList[3].description}
        imgUrl={cardsList[3].imgUrl}
        className={cardsList[3].className}
        key={cardsList[3].id}
      />
    </ul>
  </div>
)

export default App
