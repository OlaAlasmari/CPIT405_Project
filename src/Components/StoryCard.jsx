import React from 'react';

const StoryCard = (props) => {//child

    //js
  return (
    //html
    <div className="card-min-width text-center card-item">
      <img src={props.image} alt={props.title} className="img-fluid rounded-4" />
      <br /><br />
      <p className="main4">{props.title}</p>
      <p className="main6">{props.description}</p>
    </div>
  );
};

export default StoryCard;

