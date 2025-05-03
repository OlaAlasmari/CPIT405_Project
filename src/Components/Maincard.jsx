import React from 'react';

const Maincard = (props) => {
  return (
    <section className="main-proverb-card">
      <h2 className="main2">{props.title}</h2>
      <p className="main7">{props.quote}</p>
      <p className="main">{props.author}</p>
    </section>
  );
};

export default Maincard;
