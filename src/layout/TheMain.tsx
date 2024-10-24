import { useState } from 'react';
import Cup from '#types/Cup';
import ACup from '#components/ACup';
import TheFrenchPress from '#components/TheFrenchPress';
import CupColorEnum from '../types/CupColor';

const TheMain = () => {
  const [cups, setCups] = useState<Cup[]>([]);

  const handlePour = (ml: number): void => {
    const cupColors = Object.values(CupColorEnum);
    const randomColor = cupColors[Math.floor(Math.random() * cupColors.length)];
    setCups([...cups, { quantityInCup: ml, cupColor: randomColor }]);
  };

  return (
    <main className="wrapper">
      <TheFrenchPress onPour={handlePour} />
      <div className="flex">
        {cups.map((cup, index) => (
          <ACup
            key={index}
            cup={cup}
          />
        ))}
      </div>
    </main>
  );
};

export default TheMain;

