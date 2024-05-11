import { useState } from 'react';
import { TShirt } from '../components/TShirt';
import { TShirtSetup } from '../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  const [typ, setTyp] = useState('');
  const [barva, setBarva] = useState('');
  const [potisk, setPotisk] = useState('');

  const typeChange = (type) => {
    setTyp(type);
  };

  const colorChange = (color) => {
    setBarva(color);
  };

  const printChange = (print) => {
    setPotisk(print);
  };

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={typ} color={barva} print={potisk} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup
            onTypeChange={typeChange}
            onColorChange={colorChange}
            onPrintChange={printChange}
          />
        </div>
      </div>
    </div>
  );
};
