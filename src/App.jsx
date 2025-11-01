import Kalkulator from "./Kalkulator.jsx";
import Profil from "./Profil.jsx";

const user = {
  nama: "Siswa Rajin",
  pekerjaan: "React Developer",
  email: "siswa@gmail.com",
};

const App = () => {
  return (
    <div>
      <div className="salam">
        <h1>Halo,Dunia React!</h1>
        <h2>Perkenalkan</h2>
      </div>

      <div className="bungkus">
        <Profil
          nama={user.nama}
          pekerjaan={user.pekerjaan}
          email={user.email}
        />
      </div>

      <div className="bungkus">
        <Profil
          nama="Siti Aminah"
          pekerjaan="Backend Developer"
          email="siti@email.com"
        />
      </div>

      <div className="bungkus">
        <Profil
          nama="Alex Wijaya"
          pekerjaan="UI/UX Designer"
          email="alex@email.com"
        />
      </div>
      <Kalkulator />
    </div>
  );
};
export default App;
