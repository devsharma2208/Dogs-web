import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Header/Footer/Footer";
import Mainfooter from "./Component/Header/Footer/Mainfooter";

function App() {
  const [jokes, setJokes] = useState([]);
  const [toggle, setToggle] = useState(true);
  function getdata() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.message);
        setJokes(response.message);
      });
  }
  useEffect(() => {
    getdata();
  }, [toggle]);
  return (
    <div className="App">
      <Header />
      <div className="dogsData">
        <img src={jokes} alt="dogs" className="dogsImg" />
        <div>
          <button className="btn" onClick={() => setToggle((old) => !old)}>
            Change Dog
          </button>
        </div>
      </div>
      <Footer />
      <Mainfooter />
    </div>
  );
}
export default App;
