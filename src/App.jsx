import "./App.css";
import Profile from "./Components/profile";
import Tombol from "./Components/Tombol";
import Navbar from "./Components/Navbar";
import Rating from "./Components/Rating";
import HBIX from "./Asset/SULTAN.jpg"
function App() {
  return (
    <>
      <Navbar
      />
      <Profile
        Asset = {HBIX}
        Nama="Tian"
        Umur="22"
        Alamat="Bantul Yogyakarta"
        Tinggi="180"
        Berat="90"
        Status="tes"
      />
      <Tombol />
      <Rating
      />
    </>
  );
}

export default App;
