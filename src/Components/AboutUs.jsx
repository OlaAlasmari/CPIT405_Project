import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StoryCard from './StoryCard';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });

    }, []);

    return (

        <div className="row align-items-center">
            {/* Text on the left */}
            <div className="col-md-5 proverb-card-left" style={{ marginTop: '80px' }}>
                <h1 className="main2">"ما هو سعوديولوجي؟"</h1>
                <h1 className="main7" style={{ marginTop: '2em' }}>
                    نحن منصة تهتم برواية القصص والهوية الثقافية السعودية، ونسعى لتقديمها بأسلوب عصري يجمع بين أصالة الماضي وروح الحاضر، لننقل إرثنا الثقافي للأجيال القادمة بطريقة ملهمة ومبتكرة
                </h1>
            </div>

            {/* Image on the right */}
            <div className="col-md-6 text-center">
                <img
                    src="/img/aboutUs.jpg"
                    alt="سعوديولوجي"
                    className="about-image"
                />
            </div>
            {/* رسالتنا */}
            <section className="mb" data-aos="fade-up">
                <StoryCard
                    title="رسالتـنا"
                    quote="نسعى لتعزيز الانتماء من خلال تسليط الضوء على القصص المحلية والثقافة السعودية"
                    author=""
                />

            </section>
            <section className="mb-5" data-aos="fade-up">
                <div className="container"> {/* ADD THIS LINE */}
                    <div className="row justify-content-center text-center g-4">
                        <h1 className="main2">أهدافنا</h1>

                        <div className="col-6 col-md-4">
                            <StoryCard quote="الاعتزاز بالهوية السعودية" author="" />
                        </div>

                        <div className="col-6 col-md-4">
                            <StoryCard quote="الحفاظ على الموروث الثقافي" author="" />
                        </div>

                        <div className="col-6 col-md-4">
                            <StoryCard quote="مواكبة التطورات الثقافية" author="" />
                        </div>
                    </div>
                </div> {/* CLOSE CONTAINER */}
            </section>
        </div>
    );
};

export default AboutUs;