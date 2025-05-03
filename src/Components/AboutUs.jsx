import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        
    }, []);

    return (
        <div className="about-us-page" style={{ direction: 'rtl' }}>
          
            <section className="mb-5" data-aos="fade-up">
                <div className="bg-light rounded shadow p-4">
                    <div className="row align-items-center">
                      
                        <div className="col-md-6 text-end">
                            <h1 className="mb-3">ما هو سعوديولوجي؟</h1>
                            <h4 className="mb-2"></h4>
                            <p className="text-muted">
                                نحن منصة تهتم برواية القصص والهوية الثقافية السعودية بأسلوب عصري.
                            </p>
                        </div>

                     
                        <div className="col-md-6 text-center">
                            <img
                                src="/img/aboutUs.jpg"
                                alt="سعوديولوجي"
                                className="img-fluid"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* رسالتنا */}
            <section className="mb-5" data-aos="fade-up">
                <h1 className="text-center mb-3">رسالتنا</h1>
                <div
                    className="bg-light rounded shadow p-4 text-center mx-auto"
                    style={{ maxWidth: '600px' }}
                >
                    <p className="mb-0 text-muted">
                        نسعى لتعزيز الانتماء من خلال تسليط الضوء على القصص المحلية والثقافة السعودية.
                    </p>
                </div>
            </section>

            
            <section className="mb-5" data-aos="fade-up">
                <h1 className="text-center mb-4">أهدافنا</h1>
                <div className="row justify-content-center text-center g-4">
                    <div className="col-6 col-md-4">
                        <div className="bg-light rounded shadow p-3">
                            <p className="mb-0 text-muted">الاعتزاز بالهوية السعودية</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="bg-light rounded shadow p-3">
                            <p className="mb-0 text-muted">الحفاظ على الموروث الثقافي</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="bg-light rounded shadow p-3">
                            <p className="mb-0 text-muted">مواكبة التطورات الثقافية</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;