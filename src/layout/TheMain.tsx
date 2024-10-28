import { useState } from 'react';
import Cup from '#types/Cup';
import ACup from '#components/ACup';
import TheFrenchPress from '#components/TheFrenchPress';
import CupColorEnum from '../types/CupColor';

const TheMain = () => {
  const [cups, setCups] = useState<Cup[]>([]);
  const [mlsLeft, setMlsLeft] = useState<number>(270);

  const handlePour = (mls: number): void => {
    const cupColors = Object.values(CupColorEnum);
    const randomColor = cupColors[Math.floor(Math.random() * cupColors.length)];
    setCups([...cups, { quantityInCup: mls, cupColor: randomColor }]);
    setMlsLeft(mlsLeft - mls);

  };

  const pourBackCoffeInTheFrenchPress = (mls: number): void => {
    cups.splice(cups.findIndex((cup) => cup.quantityInCup === mls), 1)
    setCups([...cups]);
    setMlsLeft(mlsLeft + mls);
  }
  return (
    <main className="wrapper">
      <TheFrenchPress onPour={handlePour} mlsLeft={mlsLeft} />
      <div className="flex">
        {cups.map((cup, index) => (
          <ACup
            onClick={pourBackCoffeInTheFrenchPress}
            key={index}
            cup={cup}
          />
        ))}
      </div>
    </main>
  );
};

export default TheMain;

