import React from 'react'
import Products from './Products'

const Home = () => {
  return (
   <div >
    {/* Carousel */}
    <div id="carouselExampleIndicators" className="carousel slide mt-5" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 mt-5" src="https://img.freepik.com/premium-vector/online-shopping-concept-digital-marketing-website-mobile-application_43880-342.jpg?size=626&ext=jpg&ga=GA1.2.96464124.1655180416"width='100%'  alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carousl-secimg" src="https://img.freepik.com/free-psd/horizontal-banner-template-online-fashion-sale_23-2148585405.jpg?size=626&ext=jpg&ga=GA1.2.96464124.1655180416"width='100%' height='550px' alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 mt-5" src="https://img.freepik.com/premium-photo/omni-channel-technology-online-retail-business_31965-3010.jpg?w=996"width='100%'height='560px' alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
{/* Products */}
<Products />
    
   </div>
  )
}

export default Home
