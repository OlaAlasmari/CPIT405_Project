import React, { useState } from 'react';

const Proverbs = ({ proverbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? proverbs.length - 1 : prev - 1));
  };
  const goNext = () => {
    setCurrentIndex((prev) => (prev === proverbs.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="proverbs-section" style={{ position: 'absloute' }}>
      <h2 className="main2" style={{marginBottom:"50px"}}>
        تصفّح، تعلّم، وشارك... لأن الأمثال إرثٌ يستحق الحفظ والتقدير
      </h2>

      {proverbs.map((proverb, i) => {
        if (i !== currentIndex) return null;

        return (
          <div
            key={i}
            className="proverb-card-left"
            style={{
              display: 'absloute',
              alignItems: 'center',
              marginBottom: '40px',
              position: 'absloute',
            }}
          >
            {/* Text Box */}
            <div className="text-container">
              <h2 className="main7">“ {proverb.text} ”</h2>
              <p className="main3"style={{padding:"30px"}}>{proverb.explanation}</p>
            </div>

            {/* Image */}
            <div
              className="image-container-small"
              style={{
                position: 'absolute'
              }}
            >
              <img src={proverb.image} className="proverb-image" />
            </div>
                <button onClick={goPrevious} className="arrow-button left-arrow">◀</button>
                <button onClick={goNext} className="arrow-button right-arrow" >▶</button>
          </div>
        );
      })}
    </section>
  );
};

export default Proverbs;
