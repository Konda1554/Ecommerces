import React from 'react'
import Products from './Products'

const Home = () => {
  return (
   <div>
    {/* Carousel */}
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://img.freepik.com/premium-vector/digital-marketing-concept-online-shopping-mobile-application_68971-367.jpg?size=626&ext=jpg&ga=GA1.2.96464124.1655180416"width='100%'  alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://img.freepik.com/premium-vector/orange-big-sale-discount-banners-set-with-star-background-instaram-post-social-media-web_75010-347.jpg?w=996"width='100%'  alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://img.freepik.com/premium-photo/3d-concept-illustration-mobile-phone-with-ecommerce-decoration-black-background_582556-31.jpg?size=626&ext=jpg&ga=GA1.2.96464124.1655180416"width='100%' alt="Third slide"/>
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
