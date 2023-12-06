import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './LikeButton.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    if (liked) {
      console.log('unliked');
      setLikeCount(prevCount => prevCount - 1);
    } else {
      console.log('liked');
      setLikeCount(prevCount => prevCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="container d-flex justify-content-center mt-5"> 
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://th.bing.com/th/id/R.8a60b37cadee6e4f376456009dca07be?rik=EXcWGrNhOPlhdw&pid=ImgRaw&r=0" className="card-img-top"  />
        <div className="card-body">
          <h5 className="card-title">The Walking Dead</h5>
          <p className="card-text">Vote to bring Sasha back!</p>
          <p className="card-text">
            <button onClick={handleLikeClick} className={`like-button ${liked ? 'liked' : ''}`}>
              <img
                src="https://www.pinclipart.com/picdir/big/523-5237794_zombie-clipart.png"
                alt="Zombie Icon"
                width={30}
                height={30}
                style={{ fill: liked ? 'red' : 'gray' }}
              />
            </button>
            Likes: {likeCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LikeButton;


