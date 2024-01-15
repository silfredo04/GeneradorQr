import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const Qrgenerador = () => {
  const [text, setText] = useState('');
  const [eje, setEje] = useState(false);

  const limpiar = () => {
    let l = (e.target.qr.value = ' ');
    setText(l);
    setEje(false);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setText(e.target.qr.value);
  };

  return (
    <div>
      <form onSubmit={handleInputChange}>
        <input
          type="text"
          /* value={text} */
          name="qr"
          id="qr"
          /* onChange={handleInputChange} */
          placeholder="Ingrese el texto para el código QR"
        />
        <br />
        <br />
        <input type="submit" value="Generar QR" />
        <input
          type="button"
          value="Limpiar"
          onClick={() => limpiar()} // Limpia el texto al hacer clic en "Limpiar"
        />
      </form>
      <br />
      <br />
      <br />
      {text && (
        <div>
          <QRCode value={text} />
        </div>
      )}
    </div>
  );
};

export default Qrgenerador;
