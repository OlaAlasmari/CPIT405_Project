import React, { useEffect } from 'react';
import StoryCard from './StoryCard'; // Adjust the path if needed
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mainpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);

  const scrollSlider = (direction) => {
    const slider = document.getElementById('slider');
    const scrollAmount = 400;
    if (slider) {
      slider.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div>
      {/* Hero Section with background */}
      <section className="hero-section">
        <div
          className="special-section"
          style={{ backgroundImage: "url('/img/KSA4.png')" }}
        >
          <div className="col">
            <div className="row mb-4 text-center">
              <p className="main mb-5">SaudiOlogy سعوديولوجي</p>
              <p className="main2 mt-5">اكتشف أبرز القصص التي صنعت ذاكرة السعودية</p>
              <p className="main3 mt-5">نقدّم لك مكتبة من القصص والحكايا التراثية التي تنبض بروح السعودية وتروي سيرة الأولين</p>
              <p className="main3 mt-5">! بإمكانك قراءتها، وحفظها في مفضّلتك</p>
              <div className="mt-5">
                <button className="cta-button">ابدأ الاستكشاف</button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="row my-5">
          <div className="col text-center">
            <p className="main5">أشهر القصص</p>
          </div>
        </div>

        {/* Cards Slider */}
        <div className="container text-center my-5">
          <div className="d-flex justify-content-center align-items-center gap-3 my-4">
            <button className="btn custom-btn rounded-circle small-rounded-btn" onClick={() => scrollSlider(-1)}>
              <i className="fas fa-arrow-left"></i>
            </button>

            <div id="slider" className="d-flex gap-5 flex-nowrap custom-scroll">
              <StoryCard
                image="/img/p1.png"
                title="قصر المصمك"
                description="حصن طيني عريق يقع وسط الرياض، بُني في أواخر القرن 19م"
              />
              <StoryCard
                image="/img/p2.png"
                title="مدائن صالح"
                description="موقع أثري في محافظة العُلا، يعود لحضارة الأنباط"
              />
              <StoryCard
                image="/img/p3.png"
                title="مدينة الدرعية"
                description="مدينة تاريخية تقع شمال غرب الرياض، وتُعد مهد الدولة السعودية الأولى"
              />
              <StoryCard
                image="/img/p4.png"
                title="جدة التاريخية"
                description="منطقة قديمة تقع في قلب جدة. تشتهر بمبانيها الحجرية المزينة بالنوافذ الخشبية (الرواشين) وأسواقها الشعبية"
              />
            </div>

            <button className="btn custom-btn rounded-circle small-rounded-btn" onClick={() => scrollSlider(1)}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* King Section */}
      <div id="menu-btn"></div>
      <section className="home" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 image" data-aos="fade-left">
              <div className="row mb-3">
                <div className="col">
                  <p className="main5">الملك عبد العزيز آل سعود</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <p className="main4">
                    أنا ترعرعت في البادية .. فلا أعرف أصول الكلام و تزويقه .. و لكن أعرف الحقيقة عارية من كل تزويق .. إن فخرنا و عزنا بالإسلام
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="main6">مؤسس المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 image" data-aos="fade-left">
              <img src="\img\kinga1.png" alt="illustration-hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Mainpage;
