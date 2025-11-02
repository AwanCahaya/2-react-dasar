import Kalkulator from "./Kalkulator.jsx";
import UserCard from "./UserCard.jsx";
import { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const respon = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await respon.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Gagal Mengambil Data", error);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Daftar Pengguna</h1>
      <Kalkulator />
      <div className="salam">
        {isLoading ? (
          <h2>Sedang Memuat Data....</h2>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              nama={user.name}
              email={user.email}
              kota={user.address.city}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default App;
