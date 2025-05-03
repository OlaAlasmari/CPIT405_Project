import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favs);
    }, []);

    return (
        <div className="container text-center my-5">
            <h2 className="main2">القصص المفضلة</h2><br /><br /><br />
            <div className="row g-5 gy-5 justify-content-center">
                {favorites.length > 0 ? (
                    favorites.map((story, index) => (
                        <div className="col-md-4" key={index}>
                            <StoryCard
                                image={story.image}
                                title={story.title}
                                description={story.description}
                                showFavoriteButton={true}
                            />

                        </div>
                    ))
                ) : (
                    <p className="main6 text-center mt-5">لا توجد قصص مفضلة حالياً</p>
                )}
            </div>
        </div>
    );
};
export default Favorites;