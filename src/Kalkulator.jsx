import { useState } from "react";
const Kalkulator = () => {
  const [angka, setAngka] = useState(0);

  const handleTambah = () => {
    setAngka(angka + 1);
  };

  const handleKurang = () => {
    setAngka(angka - 1);
  };

  return (
    <div>
      <div className="kalkulator">
        <button onClick={handleTambah}>Tambah</button>
        <h1 className="angka">{angka}</h1>
        <button onClick={handleKurang}>kurang</button>
      </div>
    </div>
  );
};

export default Kalkulator;
