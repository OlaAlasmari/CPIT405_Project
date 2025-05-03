import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StoryCard from './StoryCard'; 
import Proverbs from './Proverbs';  

const ProverbsPage = () => {
  const [proverbsData, setProverbsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/getStories.php?type=proverbs')
      .then((res) => res.json())
      .then((data) => setProverbsData(data))
      .catch((err) => console.error('فشل في تحميل الأمثال:', err));
  }, []);

  return (
    <div>
      <StoryCard
        title="أمثالنـا الشعبيـة"
        quote="الأمثال الشعبية جزء من تراثنا العريق، تعكس حكم وتجارب الأجيال الماضية بأسلوب بسيط ومعبر، في كل مثل قصة، وفي كل قصة عبرة تُنقل عبر الزمن، لتظل حاضرة في حياتنا اليومية وموروثنا الثقافي"
        author=""
      />
      <Proverbs proverbs={proverbsData} />
    </div>
  );
};
export default ProverbsPage;
