import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from '../../../src/assets/carouselImage/a1.jpg'
import image2 from '../../../src/assets/carouselImage/a2.jpg'
import image3 from '../../../src/assets/carouselImage/a3.jpg'


const CarouselImage = () => {


    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src={image1} height='500' className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={image2} height='500' className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src={image3} height='500' className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselImage;
