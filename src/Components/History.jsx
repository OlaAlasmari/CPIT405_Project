import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const History = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [stories, setStories] = useState([]); 
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost/getStories.php')
            .then((res) => res.json())
            .then((data) => setStories(data))
            .catch((err) => console.error('فشل في جلب القصص:', err));
    }, []);

    const toggleFavorite = (story) => {
        const isAlreadyFavorite = favorites.some(fav => fav.title === story.title);
        if (isAlreadyFavorite) {
            setFavorites(favorites.filter(fav => fav.title !== story.title));
        } else {
            setFavorites([...favorites, story]);
        }
    };

    const addToFavorites = (story) => {
        const existing = JSON.parse(localStorage.getItem('favorites')) || [];
        const isDuplicate = existing.some(item => item.title === story.title);
        if (!isDuplicate) {
            existing.push(story);
            localStorage.setItem('favorites', JSON.stringify(existing));
        }
    };

    const filteredStories = stories.filter(story =>
        story.title.includes(searchQuery.trim())
    );

    const goToMap = (story) => {
        navigate('/map', { state: { searchTerm: story.title } });
    };

    return (
        <div>
            <section className="hero-section">
                <div className="container my-5">
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                        <p className="main2 mb-0 text-center text-md-end order-1 order-md-2" style={{ flex: 0.5 }}>
                            بين نجم ونار.. نروي لك علوم نجد ورمال الجزيرة
                        </p>
                        <div className="order-2 order-md-1" style={{ flex: 0.5 }}>
                            <input
                                type="text"
                                className="custom-search"
                                placeholder="ابحث عن قصة..."
                                style={{ direction: 'rtl' }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <i className="fas fa-search search-icon"></i>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br />

                <div className="container text-center my-5">
                    <div className="row g-5 gy-7 justify-content-center">
                        {filteredStories.length > 0 ? (
                            filteredStories.map((story, index) => (
                                <div
                                    className="col-md-4 position-relative"
                                    key={index}
                                    onClick={() => goToMap(story)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <StoryCard
                                        image={story.image}
                                        title={story.title}
                                        description={story.description}
                                        showFavoriteButton={true}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-center">لا توجد نتائج مطابقة.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default History;
