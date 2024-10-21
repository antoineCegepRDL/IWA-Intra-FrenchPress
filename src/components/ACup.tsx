import '#style/cup.scss';
import Cup from '#types/Cup';
const colors = ['orange', 'vert', 'bleu', 'jaune'];

interface PropsInterface {
  cup: Cup;
}

const TheTime = ({ cup }: PropsInterface) => {
  return (
    <div className="cup">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <path
          d="M40 40 Q40 140 100 180 Q160 140 160 40 Z"
          fill="none"
          stroke={cup.cupColor}
          stroke-width="10"
          opacity="0.5"
        />
        <path
          d="M160 60 Q190 60 190 100 Q190 140 160 140"
          fill="none"
          stroke="#000"
          stroke-width="2"
          opacity="0.5"
        />
        <path
          d="M45 60 Q45 130 100 165 Q155 130 155 60"
          fill="#8B4513"
          opacity="0.5"
        />
        <ellipse
          cx="100"
          cy="60"
          rx="55"
          ry="10"
          fill="#D2691E"
          opacity="0.3"
        />
        <path
          d="M80 30 Q90 20 100 30 Q110 40 120 30"
          fill="none"
          stroke="#000"
          stroke-width="1"
          opacity="0.3"
        >
          <animate
            attributeName="d"
            values="M80 30 Q90 20 100 30 Q110 40 120 30;
                      M80 30 Q90 10 100 30 Q110 50 120 30;
                      M80 30 Q90 20 100 30 Q110 40 120 30"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default TheTime;
