import { useState } from 'react';

interface PropsInterface {
  onChange: (value: number | null) => void;
  labelTitle: string;
}

const ANumberInput = ({ onChange, labelTitle }: PropsInterface) => {
  const [value, setValue] = useState<string>('30');
  const handleOnChange = (value: string) => {
    if (Number.isInteger(+value)) {
      onChange(+value);
      setValue(value);
    } else if (value === '') {
      setValue('');
      onChange(null);
    } else {
      alert('Veuillez entrer un entier');
    }
  };
  return (
    <label>
      {labelTitle}
      <input
        type="number"
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      mls
    </label>
  );
};

export default ANumberInput;
