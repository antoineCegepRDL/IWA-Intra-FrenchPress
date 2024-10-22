import '#style/Layout.scss';
import { useEffect, useState } from 'react';

const TheFooter = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const storedCheckedItems = localStorage.getItem('checkedItems');
    if (storedCheckedItems) {
      setCheckedItems(JSON.parse(storedCheckedItems));
    }
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updated = {
      ...checkedItems,
      [index]: event.target.checked,
    };
    localStorage.setItem('checkedItems', JSON.stringify(updated));
    setCheckedItems(updated);
  };

  return (
    <footer>
      <p>Voici ce que tu as à faire. Tu peux cocher les crochets, ils resteront cochés même si tu rafraichis</p>
      {[
        'Extraire du code html fourni la presse à café (qui vient avec le input) dans un composant',
        'Extraire du code html fourni une tasse dans un composant',
        'Relier le nb de mls restants à la valeur écrite sur la presse à café (initialement 270)',
        'Ajuster la hauteur height du café dans la presse à café selon le nb de mls restants. Pour se faire, va voir le className coffee et modifie son style.',
        "Relier l'évènement onChange de l'input à la hauteur du café dans la presse à café",
        "Lorsqu'on clique sur la presse à café, verser une nouvelle tasse avec la quantité de mls spécifiée puis retirer cette quantité de la presse à café.",
        "Créer une nouvelle tasse avec le nb de mls spécifié et une couleur aléatoire (IWA sur teams pourra t'aider)",
        "Afficher les tasses dans la page avec leur couleur (pas besoin d'afficher le nombre de mls)",
        'Empêcher de verser des tasses de plus de 50 mls',
        'Empêcher de verser des tasses de 0 ml ou moins',
        'Empêcher de verser du café quand il ne reste plus de ml dans la cafetière',
        'Quand le café est vide, afficher "VIDE" à la place du composant ANumberInput',
        'Si tu utilises IWA, tu dois m\'indiquer dans le code où tu l\'as utilisé et m\'expliquer quel était ton problème et ce que fait le code fourni en détail. Si j\'ai un doute, cette section vaudra 0.',
      ].map((task, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={checkedItems[index] || false}
            onChange={(event) => handleCheckboxChange(event, index)}
          />
          {task}
        </label>
      ))}
      <p>Que le café soit avec toi!</p>
    </footer>
  );
};

export default TheFooter;
