import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Maincard from './Maincard'; // Adjust the path if needed
import Proverbs from './Proverbs'


const ProverbsPage = () => {
  
  const proverbsData = [
    {
      title: "مثل 1",
      text: "الحي يحييك والميت يزيدك غبن",
      explanation: "هذا المثل يصف الشخص المشرق والمتفائل بأنه كالحياة، يُضفي إشراقًا وسعيًا على حياة صديقه، بعكس الصديق المكتئب الذي يشبهه المثل بالميت",
      image: "/img/proverbs1 (2).jpg",
    },

    {
      title: "مثل 2",
      text: "قومٌ تعاونوا ماذلوا",
      explanation: "هذا المثل يُضرب للقبيلة التي تتعاون فيما بينها أو حتى مجموعة معينة فإنهم لن يُذلوا بإذن الله لأن يد الله مع الجماعة",
      image: "/img/proverbs4.png",
    },
    {
      title: "مثل 3",
      text: "لو كان فيه الخير، ما رماه الطيــر ",
      explanation: "وهذا يعني أن الشيء الذي يذهب منك، لم يكن فيه الخير، لذا فلا تحزن عليه",
      image: "/img/proverbs3.jpg",
    },
    
  

    {
      title: "مثل 5",
      text:"إن طاعك الزمان وإلا طعه",
      explanation: "يشير هذا المثل أن الإنسان يجب عليه التأقلم مع الحياة والمجتمع بشكلها الطبيعي، ولا ينزعج من الأحداث مهما كانت قاسية ولا ترضيه",
      image: "/img/proverbs1.jpg",
    },
    {
      title: "مثل 6",
      text:" اللي ما يعرف الصقر يشويه",
      explanation: "يدل المثل على من لا يقدّر النعمة حتى يفقدها، فيتحسّر عليها بعد فوات الأوان، فالصقر رمزٌ للشيء الثمين، والشوي دليل على خسارته نهائياً",
      image: "/img/proverb6.jpg",
    },
  ];

  return (
    <div>

      {/* Main card with introduction and navigation */}
      <Maincard
        title="أمثالنـا الشعبيـة"
        quote="الأمثال الشعبية جزء من تراثنا العريق، تعكس حكم وتجارب الأجيال الماضية بأسلوب بسيط ومعبر ، في كل مثل قصة، وفي كل قصة عبرة تُنقل عبر الزمن، لتظل حاضرة في حياتنا اليومية وموروثنا الثقافي"
        author=""
      />
      {/* Proverbs list with text + image layout */}
      <Proverbs proverbs={proverbsData} />

       </div>
    

  );
};

export default ProverbsPage;
