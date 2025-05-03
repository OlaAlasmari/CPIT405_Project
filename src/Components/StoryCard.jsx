import React, { useState, useEffect } from 'react';

const StoryCard = ({
  image,
  title,
  description,
  quote,
  author,
  showFavoriteButton = false,
  children,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favs.some(story => story.title === title));
  }, [title]);

  const handleFavoriteToggle = () => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updated = favs.filter(story => story.title !== title);
      localStorage.setItem('favorites', JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      favs.push({ image, title, description });
      localStorage.setItem('favorites', JSON.stringify(favs));
      setIsFavorite(true);
    }
  };

  const isQuoteCard = quote !== undefined || author !== undefined;

  return (
    <div
      className={`card-min-width text-center card-item position-relative p-4 w-100 ${
        isQuoteCard ? 'main-proverb-card' : ''
      }`}
      style={{ maxWidth: '800px' }}
    >
      {showFavoriteButton && (
        <button
          className="favorite-button"
          onClick={handleFavoriteToggle}
          aria-label="إضافة إلى المفضلة"
        >
          <i className={`fas fa-heart ${isFavorite ? 'text-danger' : 'text-secondary'}`}></i>
        </button>
      )}

      {children ? (
        children
      ) : isQuoteCard ? (
        <>
          <h2 className="main2">{title}</h2>
          <p className="main7">{quote}</p>
          <p className="main">{author}</p>
        </>
      ) : (
        <>
          <img src={image} alt={title} className="img-fluid rounded-4" />
          <br /><br />
          <p className="main4">{title}</p>
          <p className="main6">{description}</p>
        </>
      )}
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
