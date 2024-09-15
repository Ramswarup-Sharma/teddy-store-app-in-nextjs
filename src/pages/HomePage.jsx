import React from 'react';
import { Link } from 'react-router-dom';
import teddy3 from '../images/teddy3.jpg';
import teddy4 from '../images/teddy4.jpg';

const HomePage = () => {
  return (
    <div>
      <div className="banner">
        <img src="./teddy-banner-image.jpg" alt="Banner" className="banner-image" />
      </div>
      <h1>Welcome to the Teddy Bear Store!</h1>
      <hr/>
      <div className='show-img'>
        <img src={teddy3}/>
        <img src={teddy4}/>
        <img src={teddy3}/>
        <img src={teddy4}/>
        <img src={teddy3}/>
      </div>
      <div className='about-detail'>
      <div className='side-content'>
        <h1>About Us</h1>
        <hr/>
        <p>Teddy Store is the best Famous in The World, consectetur adipisicing elit. Necessitatibus, ratione expedita distinctio totam aliquid adipisci blanditiis quo, facere eveniet iste dolorem repellat id minima, reprehenderit eos alias illo omnis reiciendis sit accusamus fugiat vero aperiam? Soluta nihil obcaecati alias suscipit odit ratione ab laboriosam ad tempora illum. Velit fuga vitae delectus eos rem labore amet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptates mollitia! Ab reiciendis ad, eligendi vero optio perferendis veniam aperiam enim corporis quibusdam cupiditate aspernatur?
        </p>
      </div>
      <div className='side-image'>
        <img src={teddy4} />
      </div>
      </div>
      <div className='shop-btn'>
      <Link to="/products">
        <button>Shop All Teddy Bears</button>
      </Link>
      </div>
    </div>
  );
};

export default HomePage;
