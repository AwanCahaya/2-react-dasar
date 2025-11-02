const UserCard = ({ nama, email, kota }) => {
  return (
    <div className="bungkus">
      <h3>Nama:{nama}</h3>
      <h3>Email: {email}</h3>
      <h3>Kota:{kota}</h3>
      <br />
    </div>
  );
};
export default UserCard;
