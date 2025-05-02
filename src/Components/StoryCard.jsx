import React, { useState, useEffect } from 'react';

const StoryCard = ({ image, title, description, showFavoriteButton = false }) => {
  const [isFavorite, setIsFavorite] = useState(false);  // State to track if the story is marked as favorite

  // On component mount or when the title changes, check if this story is already in favorites
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || []; // Retrieve favorites from localStorage
    setIsFavorite(favs.some(story => story.title === title)); // Check if current story is in favorites
  }, [title]);


  // Toggle favorite status for the story
  const handleFavoriteToggle = () => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updated = favs.filter(story => story.title !== title); // Remove the story from favorites if it's already added
      localStorage.setItem('favorites', JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      favs.push({ image, title, description }); // Add the story to favorites
      localStorage.setItem('favorites', JSON.stringify(favs));
      setIsFavorite(true);
    }
  };

  return (
    <div className="card-min-width text-center card-item position-relative">
      {showFavoriteButton && (
        <button
          className="favorite-button"
          onClick={handleFavoriteToggle}
          aria-label="إضافة إلى المفضلة"
        >
          <i className={`fas fa-heart ${isFavorite ? 'text-danger' : 'text-secondary'}`}></i>
        </button>
      )}
      <img src={image} alt={title} className="img-fluid rounded-4" />
      <br /><br />
      <p className="main4">{title}</p>
      <p className="main6">{description}</p>
    </div>
  );
};

export default StoryCard;



//import React from 'react';


//const StoryCard = (props) => {//child
  //const handleFavorite = () => {
    //if (props.onFavorite) {
      //props.onFavorite();
    //}};

    //js
  //return (
    //html
    //<div className="card-min-width text-center card-item">
      //<img src={props.image} alt={props.title} className="img-fluid rounded-4" />
      //<br /><br />
      //<p className="main4">{props.title}</p>
      //<p className="main6">{props.description}</p>
    //</div>
    
  //);
//};



//export default StoryCard;

