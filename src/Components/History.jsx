import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard'; // Adjust the path if needed
import AOS from 'aos';
import 'aos/dist/aos.css';


const History = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [favorites, setFavorites] = useState([]);

    // list of historical stories
    const stories = [
        {
            image: '/img/1.png',
            title: 'قصر المصمك',
            description: 'حصن طيني عريق يقع وسط الرياض، بُني في أواخر القرن 19م',
        },
        {
            image: '/img/2.png',
            title: 'مدائن صالح',
            description: 'موقع أثري في محافظة العُلا، يعود لحضارة الأنباط',
        },
        {
            image: '/img/3.png',
            title: 'مدينة الدرعية',
            description: 'مدينة تاريخية تقع شمال غرب الرياض، وتُعد مهد الدولة السعودية الأولى',
        },
        {
            image: '/img/4.png',
            title: 'جدة التاريخية',
            description: 'منطقة قديمة تقع في قلب جدة. تشتهر بمبانيها الحجرية المزينة بالنوافذ الخشبية (الرواشين) وأسواقها الشعبية',
        },
        {
            image: '/img/5.png',
            title: 'مسجد قباء',
            description: 'أول مسجد بُني في الإسلام، شُيّد في مدينة قباء قرب المدينة المنورة',
        },
        {
            image: '/img/6.png',
            title: 'المسجد الحرام',
            description: 'أعظم مسجد في الإسلام، يقع في مكة المكرمة ويضم الكعبة المشرفة قبلة المسلمين في صلاتهم',
        },
        {
            image: '/img/7.png',
            title: 'قرية الفاو',
            description: 'من أشهر وأكبر المواقع الأثرية في السعودية. تقع جنوب غرب العاصمة الرياض',
        },
        {
            image: '/img/8.png',
            title: 'واحة الأحساء',
            description: 'من المواقع التي سجلت في قائمة التراث العالمي في اليونسكو في عام 2018',
        },
        {
            image: '/img/9.png',
            title: 'منطقة حمى الثقافية',
            description: 'أحد أقدم طرق القوافل القديمة التي كانت تعبر شبه الجزيرة العربية',
        },
        {
            image: '/img/10.png',
            title: 'حافة العالم',
            description: 'منظر طبيعي خلاب يقع على بعد حوالي 90 كيلومترا من الرياض',
        },
    ];

    // Toggles a story in the local component's favorite state
    const toggleFavorite = (story) => {
        const isAlreadyFavorite = favorites.some(fav => fav.title === story.title);
        if (isAlreadyFavorite) {
            setFavorites(favorites.filter(fav => fav.title !== story.title));
        } else {
            setFavorites([...favorites, story]);
        }
    };

    // Adds a story to favorites in localStorage if not already there
    const addToFavorites = (story) => {
        const existing = JSON.parse(localStorage.getItem('favorites')) || [];
        const isDuplicate = existing.some(item => item.title === story.title);
        if (!isDuplicate) {
            existing.push(story);
            localStorage.setItem('favorites', JSON.stringify(existing));
        }
    };


    // Filters stories based on search query input
    const filteredStories = stories.filter(story =>
        story.title.includes(searchQuery.trim())
    );

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
                </div> <br /><br /><br /><br />

                <div className="container text-center my-5">
                    <div className="row g-5 gy-7 justify-content-center">
                        {filteredStories.length > 0 ? (
                            filteredStories.map((story, index) => (
                                <div className="col-md-4 position-relative" key={index}>
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