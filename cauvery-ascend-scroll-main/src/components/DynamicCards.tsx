import React from 'react';
import { FaClock, FaTrophy, FaRocket, FaGamepad, FaStopwatch, FaBolt, FaFlagCheckered, FaUsers } from 'react-icons/fa';
import '../styles/DynamicCards.scss';

const cardData = [
  { icon: <FaClock key="clock" />, code: "GO" },
  { icon: <FaTrophy key="trophy" />, code: "WN" },
  { icon: <FaRocket key="rocket" />, code: "UP" },
  { icon: <FaGamepad key="gamepad" />, code: "VS" },
  { icon: <FaStopwatch key="stopwatch" />, code: "3H" },
  { icon: <FaBolt key="bolt" />, code: "FX" },
  { icon: <FaFlagCheckered key="flag" />, code: "OK" },
  { icon: <FaUsers key="users" />, code: "TM" }
];

const DynamicCards: React.FC = () => {
  return (
    <div className="dynamic-cards-container">
      <div className="cards-ring">
        {cardData.map((item, index) => (
          <div key={index} className="card-item">
            <div className="icon">{item.icon}</div>
            <div className="code">{item.code}</div>
          </div>
        ))}
        <div className="glow-base" />
      </div>
    </div>
  );
};

export default DynamicCards; 