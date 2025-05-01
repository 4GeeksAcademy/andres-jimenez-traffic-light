import React, {useEffect, useState} from "react";


const TrafficLight = () => {
    const [light, setLight] = useState(0);
    const colors = ['red', 'yellow', 'green'];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setLight((previousLight) => (previousLight + 1) % 3);
      }, 1000);
  
      return () => clearInterval(interval); 
    }, []);
  
    return (
      <div className="traffic-light">
        {colors.map((color, index) => (
          <div
            key={color}
            className={`circle ${color} ${light === index ? "on" : ''}`}
          ></div>
        ))}
      </div>
    );
  };

export default TrafficLight;
  