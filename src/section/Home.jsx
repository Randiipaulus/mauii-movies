import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; 
import { FaPlay } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Home = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setSelectedMovie(movies[0]);
  }, [movies]);

  const CustomDot = () => (
    <div className="dots">
      <p className="dot-self">.</p>
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div onClick={props.onClick} className="prev-arrow">
      <IoIosArrowBack />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div onClick={props.onClick}  className="next-arrow">
     <IoIosArrowForward />
    </div>
  );
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setSelectedMovie(movies[index]),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i) => <CustomDot />,
  };

  return (
    <div className="movie-carousel">
      <Slider {...settings} className='body-slider'>
        {movies.map((movie, index) => (
          <div key={index} className='cover-movie'>
            <img src={movie.image} className='movie-movie' alt={`Movie ${index + 1}`} />
          </div>
        ))}
      </Slider>
  
      {selectedMovie && (
        <div className="info-movie">
          <img src={selectedMovie.title} className="title-movie" />
          <div className="details-info">
            <ul className='list-info'>
              <li className="items-info">{selectedMovie.year}</li>
              <li className="items-info-age">{selectedMovie.age}</li>
              <li className="items-info-time">{selectedMovie.time}</li>
              <li className="items-info-end">{selectedMovie.ctg}</li>
            </ul>
            <p className="about-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Autem, ad, veritatis perferendis id provident
              dolorum sapiente aperiam cum ratione eligendi labo
              rum laboriosam unde sunt! Asperiores repellat quis
              quam odit eius! Ipsam!
            </p>

            <section className='btns-info'>
              <p className="watch"><FaPlay/> Watch</p>
              <p className="my-list-btn">+ My List</p>
              <a href={selectedMovie.trailer} className="youtube">Watch Trailer</a>
            </section>

          </div>
        </div>
      )}
  
      {selectedMovie && (
        <div
          className="background-image"
          style={{ backgroundImage: `url(${selectedMovie.backgroundImage})` }}
        />
      )}
    </div>
  );
  
};

export default Home;
