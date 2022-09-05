import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function cross() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.mariefrance.fr/wp-content/uploads/sites/5/2020/09/maillons-750x394.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://deavita.fr/wp-content/uploads/2021/11/tendances-sac-a-main-de-lhiver-2021-2022-mode-automne-hiver-femme.webp"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://autourdelafrance.com/wp-content/uploads/2019/11/20-Sacs-%C3%A0-Main-Tendance-Automne-Hiver-2019-2020.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3></h3>
        <p>
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    
    </div>
  )
}

export default cross