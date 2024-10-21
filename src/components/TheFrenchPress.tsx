import '#style/TheFrenchPress.scss';
import { useState } from 'react';

interface PropsInterface {
  onPour: (mls: number) => void;
}

const TheFrenchPress = ({ onPour }: PropsInterface) => {
  const [mlsLeft, setMlsLeft] = useState<number>(270);
  const [mlsToPour, setMlsToPour] = useState<number>(30);
  const style = { height: `${mlsLeft}px` };
  const handlePour = (): void => {
    if (mlsToPour <= 0 || mlsLeft < mlsToPour || mlsToPour > 50) {
      alert('Veuillez entrer une quantité valide');
      return;
    }
    setMlsLeft(mlsLeft - mlsToPour);
    onPour(mlsToPour);
  };
  return (
    <div>
      <div
        className="french-press"
        onClick={() => handlePour()}
      >
        <div className="lid">
          <div className="knob"></div>
        </div>
        <div className="handle"></div>
        <div className="plunger"></div>
        <div
          className="coffee"
          style={style}
        ></div>
        <div className="mls-left">{mlsLeft} ml</div>
      </div>
      {mlsLeft === 0 ? (
        <label>VIDE</label>
      ) : (
        <label>
          Verser :
          <input
            type="number"
            value={mlsToPour}
            onChange={(e) => setMlsToPour(Number(e.target.value))}
          />
          mls
        </label>
      )}
    </div>
  );
};

export default TheFrenchPress;
