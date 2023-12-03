import React from 'react';
import './App.css'
import Home from './section/Home';
import Navbar from './components/Navbar';
import title1 from './images/the-65-title.png';
import title2 from './images/the-little-mermaid-title.png';
import title3 from './images/the-tank-title.png';
import title4 from './images/the-covenant-title.png';
import title5 from './images/the-black-demon-title.png';
import pic1 from './images/movies/65.jpg';
import pic2 from './images/movies/the-little-mermaid.jpeg';
import pic3 from './images/movies/the-tank.jpeg';
import pic4 from './images/movies/the-covenant.jpg';
import pic5 from './images/movies/the-black-demon.jpg';
import bg1 from './images/movies/bg-65.jpeg';
import bg2 from './images/movies/bg-little-mermaid.jpg';
import bg3 from './images/movies/bg-the-tank.jpeg';
import bg4 from './images/movies/bg-the-covenant.jpeg';
import bg5 from './images/movies/bg-the-black-demon.jpeg';
import Bottom from './components/Bottom';

const movies = [
  {
    title: title1,
    image: pic1,
    backgroundImage: bg1,
    year: '2023',
    time: '1h 33min',
    ctg:'Sci-fi/Action',
    age: '13+',
    trailer: 'https://www.youtube.com/watch?v=bHXejJq5vr0'
  },
  {
    title: title2,
    image: pic2,
    backgroundImage: bg2,
    year: '2023',
    time: '2h 23min',
    ctg:'Fantasy/Musical',
    age: 'PG',
    trailer: 'https://www.youtube.com/watch?v=kpGo2_d3oYE'
  },
  {
    title: title3,
    image: pic3,
    backgroundImage: bg3,
    year: '2023',
    time: '1h 40min',
    ctg:'Horror/Suspense',
    age: 'R',
    trailer: 'https://www.youtube.com/watch?v=23GmhsmrCIo'
  },
  {
    title: title4,
    image: pic4,
    backgroundImage: bg4,
    year: '2023',
    time: '2h 3min',
    ctg:'Action/War',
    age: 'R',
    trailer: 'https://www.youtube.com/watch?v=02PPMPArNEQ'
  },
  {
    title: title5,
    image: pic5,
    backgroundImage: bg5,
    year: '2023',
    time: '1h 40min',
    ctg:'Horror/Sci-fi',
    age: 'R',
    trailer: 'https://www.youtube.com/watch?v=7eeRTWPWIK0'
  },
  
];

const App = () => {
  return (
    <div className='everything'>
      <Navbar />
      <Home movies={movies} />
      <Bottom />
    </div>
  );
};

export default App;
