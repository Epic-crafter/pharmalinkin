import React from 'react';
import StatisticsCard from './stats';

const cardData = [
  {
    count: 76,
    description: "New candidates",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/83972cff425ae92c693682bee308852587d40a3c1ea436004959cf366926b953?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    bgColor: "bg-sky-600"
  },
  {
    count: 3,
    description: "Schedule for today",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/127308a353e59255066709b5e4b315317a815f917e1e586b71c8b6df9a9d8c2d?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    bgColor: "bg-emerald-300"
  },
  {
    count: 24,
    description: "Messages received",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a62f044d70963a5b3453a7320ef17787990fb60bc88ff27931884182dc876f65?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    bgColor: "bg-sky-400"
  }
];

const StatisticsCardList: React.FC = () => {
  return (
    <main className="flex flex-wrap gap-6 items-start text-white">
      {cardData.map((card, index) => (
        <StatisticsCard
          key={index}
          count={card.count}
          description={card.description}
          iconSrc={card.iconSrc}
          bgColor={card.bgColor}
        />
      ))}
    </main>
  );
};

export default StatisticsCardList;